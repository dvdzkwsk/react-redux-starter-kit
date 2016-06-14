/* eslint-disable */
require('shelljs/global');

/**
 * Adds mark check symbol
 */
function addCheckMark(callback) {
  process.stdout.write(' ✓');
  callback();
}

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

process.stdout.write('Cleanup started...');

// Cleanup components folder
rm('-rf', 'src/components/*');

// Cleanup containers folder
rm('-rf', 'src/containers/*');
mkdir('src/containers/');
mkdir('src/components/');


process.stdout.write(' ✓');

// Commit the changes
if (exec('git add . --all && git commit -qm "Remove prebuilt pages"').code !== 0) {
  echo('\nError: Git commit failed');
  exit(1);
}

echo('\nCleanup done!');
