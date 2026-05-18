module.exports = async function validate(context) {
  const count = await context.terminal.run('git rev-list --count HEAD');
  if (count.exitCode !== 0 || Number(count.stdout.trim()) < 1) {
    return context.fail('Create at least one commit with git commit.');
  }

  const log = await context.terminal.run('git log --oneline --decorate');
  if (!log.stdout.includes('Initial project snapshot')) {
    return context.fail('Use the commit message: Initial project snapshot.');
  }

  const readmeTracked = await context.terminal.run('git ls-files README.md');
  const appTracked = await context.terminal.run('git ls-files src/app.txt');
  if (!readmeTracked.stdout.trim() || !appTracked.stdout.trim()) {
    return context.fail('Stage and commit README.md and src/app.txt.');
  }

  return context.pass('Initial commit created with the expected tracked files.');
};
