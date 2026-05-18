module.exports = async function validate(context) {
  const branch = await context.terminal.run('git branch --show-current');
  if (branch.stdout.trim() !== 'main') {
    return context.fail('Switch back to main before checking this step.');
  }

  if (!await context.files.exists('profile.md')) {
    return context.fail('Merge feature/profile-card so profile.md exists on main.');
  }

  const merged = await context.terminal.run('git branch --merged');
  if (!merged.stdout.includes('feature/profile-card')) {
    return context.fail('feature/profile-card should be merged into main.');
  }

  const log = await context.terminal.run('git log --oneline --merges');
  if (!log.stdout.includes('Merge profile card')) {
    return context.fail('Use the merge commit message: Merge profile card.');
  }

  return context.pass('Feature branch merged into main with a visible merge commit.');
};
