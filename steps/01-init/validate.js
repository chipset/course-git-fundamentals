module.exports = async function validate(context) {
  const inside = await context.terminal.run('git rev-parse --is-inside-work-tree');
  if (inside.exitCode !== 0 || !inside.stdout.includes('true')) {
    return context.fail('This folder is not a Git repository yet. Run git init -b main.');
  }

  const branch = await context.terminal.run('git branch --show-current');
  if (branch.stdout.trim() !== 'main') {
    return context.fail('Rename or create the default branch as main.');
  }

  const name = await context.terminal.run('git config --get user.name');
  const email = await context.terminal.run('git config --get user.email');
  if (!name.stdout.trim() || !email.stdout.trim()) {
    return context.fail('Set local user.name and user.email so training commits can be created.');
  }

  return context.pass('Repository initialized on main with local author identity configured.');
};
