module.exports = async function validate(context) {
  if (!await context.files.exists('rescue.md')) {
    return context.fail('Recover rescue.md using the commit hash from git reflog.');
  }

  const rescue = await context.files.read('rescue.md');
  if (!rescue.includes('Recovered with reflog.')) {
    return context.fail('rescue.md should contain the reflog recovery note.');
  }

  const log = await context.terminal.run('git log --oneline --max-count=10');
  if (!log.stdout.includes('Add rescue note')) {
    return context.fail('Recover the Add rescue note commit into current history.');
  }

  const reflog = await context.terminal.run('git reflog --oneline');
  if (!reflog.stdout.includes('reset: moving to HEAD~1')) {
    return context.fail('Practice the recovery by resetting the rescue commit away before recovering it.');
  }

  return context.pass('Recovered a lost local commit using reflog.');
};
