module.exports = async function validate(context) {
  if (!await context.files.exists('.gitignore')) {
    return context.fail('Create a .gitignore file.');
  }

  const ignore = await context.files.read('.gitignore');
  for (const pattern of ['logs/', 'temp/', '*.tmp']) {
    if (!ignore.includes(pattern)) {
      return context.fail(`Add ${pattern} to .gitignore.`);
    }
  }

  const check = await context.terminal.run('git check-ignore logs/app.log temp/cache.tmp');
  if (check.exitCode !== 0) {
    return context.fail('logs/app.log and temp/cache.tmp should be ignored by Git.');
  }

  const trackedLog = await context.terminal.run('git ls-files logs/app.log temp/cache.tmp');
  if (trackedLog.stdout.trim()) {
    return context.fail('Ignored generated files should not be tracked.');
  }

  const log = await context.terminal.run('git log --oneline');
  if (!log.stdout.includes('Ignore generated files')) {
    return context.fail('Commit .gitignore with message: Ignore generated files.');
  }

  return context.pass('.gitignore is committed and generated files are ignored.');
};
