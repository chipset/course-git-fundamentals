module.exports = async function validate(context) {
  const file = 'reset-lab.txt';
  if (!await context.files.exists(file)) {
    return context.fail('reset-lab.txt is missing.');
  }

  const text = await context.files.read(file);
  if (text.includes('DO NOT KEEP')) {
    return context.fail('Discard the bad working-tree edit with git restore reset-lab.txt.');
  }

  const staged = await context.terminal.run('git diff --cached --name-only');
  if (staged.stdout.trim()) {
    return context.fail('There are still staged changes. Use git restore --staged reset-lab.txt.');
  }

  const tracked = await context.terminal.run('git ls-files reset-lab.txt');
  if (!tracked.stdout.trim()) {
    return context.fail('Commit reset-lab.txt before practicing restore.');
  }

  const log = await context.terminal.run('git log --oneline');
  if (!log.stdout.includes('Add reset lab file')) {
    return context.fail('Commit reset-lab.txt with message: Add reset lab file.');
  }

  return context.pass('File-level unstage and restore practice is complete.');
};
