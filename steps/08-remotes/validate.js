module.exports = async function validate(context) {
  const remote = await context.terminal.run('git remote get-url origin');
  if (remote.exitCode !== 0 || !remote.stdout.includes('git-fundamentals-remote.git')) {
    return context.fail('Add a remote named origin pointing to ../git-fundamentals-remote.git.');
  }

  const upstream = await context.terminal.run('git rev-parse --abbrev-ref --symbolic-full-name @{u}');
  if (upstream.exitCode !== 0 || upstream.stdout.trim() !== 'origin/main') {
    return context.fail('Push with -u so main tracks origin/main.');
  }

  const remoteHead = await context.terminal.run('git rev-parse origin/main');
  const localHead = await context.terminal.run('git rev-parse HEAD');
  if (remoteHead.exitCode !== 0 || remoteHead.stdout.trim() !== localHead.stdout.trim()) {
    return context.fail('Push main to origin so origin/main matches your local HEAD.');
  }

  return context.pass('origin is configured and main is pushed with upstream tracking.');
};
