module.exports = async function validate(context) {
  const branch = await context.terminal.run('git branch --show-current');
  if (branch.stdout.trim() !== 'feature/profile-card') {
    return context.fail('Switch to a branch named feature/profile-card.');
  }

  if (!await context.files.exists('profile.md')) {
    return context.fail('Create profile.md on the feature branch.');
  }

  const profile = await context.files.read('profile.md');
  if (!profile.includes('Role: Learner') || !profile.includes('Favorite command: git status')) {
    return context.fail('profile.md should include the starter profile content.');
  }

  const log = await context.terminal.run('git log --oneline');
  if (!log.stdout.includes('Add profile card')) {
    return context.fail('Commit profile.md with message: Add profile card.');
  }

  return context.pass('Feature branch has a committed profile card.');
};
