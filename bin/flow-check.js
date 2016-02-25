import cp from 'child_process';
import flowBin from 'flow-bin';

try {
  cp.execFileSync(flowBin, ['check'], {stdio: 'inherit'});
} catch (e) {
  process.exit(1);
}
