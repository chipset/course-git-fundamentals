module.exports = async function validate(context) {
  if (!await context.files.exists('reset-practice.txt')) {
    return context.fail('Create and commit reset-practice.txt first.');
  }

  const text = await context.files.read('reset-practice.txt');
  if (text.includes('Throwaway line')) {
    return context.fail('Use git reset --hard HEAD~1 to remove the disposable commit and throwaway line.');
  }

  const log = await context.terminal.run('git log --oneline');
  if (!log.stdout.includes('Add reset practice file')) {
    return context.fail('Keep the baseline commit: Add reset practice file.');
  }

  if (log.stdout.includes('Temporary reset experiment')) {
    return context.fail('The current branch history should no longer include Temporary reset experiment.');
  }

  const reflog = await context.terminal.run('git reflog --oneline');
  if (!reflog.stdout.includes('Temporary reset experiment')) {
    return context.fail('Create the temporary commit before resetting so reflog can show the recovery trail.');
  }

  return context.pass('Local disposable commit was removed, and reflog still records it.');
};
