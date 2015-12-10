require('babel-register');

const fs     = require('fs');
const config = require('../config');
const debug  = require('debug')('kit:bin:compile');
const paths  = config.utils_paths;

debug('Create webpack compiler.');

const compiler = require('webpack')(
  require('../build/webpack/' + config.env)
);

compiler.run(function (err, stats) {
  const jsonStats = stats.toJson();

  debug('Webpack compile completed.');
  console.log(stats.toString({
    chunks : false,
    chunkModules : false,
    colors : true
  }));

  if (err) {
    debug('Webpack compiler encountered a fatal error.', err);
    process.exit(1);
  } else if (jsonStats.errors.length > 0) {
    debug('Webpack compiler encountered errors.');
    process.exit(1);
  } else if (jsonStats.warnings.length > 0) {
    debug('Webpack compiler encountered warnings.');

    if (config.compiler_fail_on_warning) {
      process.exit(1);
    }
  }

  // ----------------------------------
  // HACK: Inline the webpack manifest script.
  // This should be done via HtmlWebpackPlugin... somehow
  // ----------------------------------
  if (!config.compiler_inline_manifest) {
    return debug('Inline manifest config option is disabled, exiting.');
  }

  debug('Inject webpack manifest as inline script.');
  debug('Load compiled template.');
  const template = fs.readFileSync(paths.dist('index.html'), 'utf-8');
  const manifest = jsonStats.assets
    .map(a => a.name)
    .filter(a => /manifest/.test(a) && !/map/.test(a))[0];

  if (!manifest) {
    return debug(
      'Could not find the manifest file produced by webpack. Compiled ' +
      'index.html file will remain unchanged.'
    );
  }

  const injectedManifest = template.replace(
    new RegExp(`<script src=".*${manifest}"></script>`),
    `<script>${fs.readFileSync(paths.dist(manifest), 'utf-8')}</script>`
  );
  debug('Override compiled index.html template.');
  fs.writeFileSync(paths.dist('index.html'), injectedManifest);
});
