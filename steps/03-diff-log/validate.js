module.exports = async function validate(context) {
  if (!await context.files.exists('docs/git-notes.md')) {
    return context.fail('docs/git-notes.md is missing.');
  }

  const app = await context.files.read('src/app.txt');
  if (!app.includes('Version: 2')) {
    return context.fail('Update src/app.txt so it contains Version: 2.');
  }

  const tracked = await context.terminal.run('git ls-files docs/git-notes.md');
  if (!tracked.stdout.trim()) {
    return context.fail('Stage and commit docs/git-notes.md.');
  }

  const log = await context.terminal.run('git log --oneline');
  if (!log.stdout.includes('Document status and diff')) {
    return context.fail('Commit the diff/log lesson with message: Document status and diff.');
  }

  return context.pass('Diff lesson changes are committed and visible in history.');
};
