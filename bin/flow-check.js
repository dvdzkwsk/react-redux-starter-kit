const cp = require('child_process')

try {
  cp.execFileSync(require('flow-bin'), ['check'], {stdio: 'inherit'})
} catch (e) {
  process.exit(1)
}
