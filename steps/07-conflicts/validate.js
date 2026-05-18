module.exports = async function validate(context) {
  const unmerged = await context.terminal.run('git diff --name-only --diff-filter=U');
  if (unmerged.stdout.trim()) {
    return context.fail('There are still unmerged files. Resolve the conflict, add profile.md, and commit.');
  }

  const branch = await context.terminal.run('git branch --show-current');
  if (branch.stdout.trim() !== 'main') {
    return context.fail('Finish the conflict resolution on main.');
  }

  const profile = await context.files.read('profile.md');
  if (profile.includes('<<<<<<<') || profile.includes('=======') || profile.includes('>>>>>>>')) {
    return context.fail('Remove all conflict markers from profile.md.');
  }

  if (!profile.includes('Role: Collaborative editor')) {
    return context.fail('Resolve profile.md with Role: Collaborative editor.');
  }

  const log = await context.terminal.run('git log --oneline');
  if (!log.stdout.includes('Resolve profile role conflict')) {
    return context.fail('Commit the resolution with message: Resolve profile role conflict.');
  }

  return context.pass('Merge conflict resolved cleanly on main.');
};
