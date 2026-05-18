module.exports = async function validate(context) {
  if (!await context.files.exists('remote-news.md')) {
    return context.fail('Pull the collaborator change so remote-news.md exists locally.');
  }

  const news = await context.files.read('remote-news.md');
  if (!news.includes('Pulled from a collaborator clone.')) {
    return context.fail('remote-news.md should contain the collaborator note.');
  }

  const log = await context.terminal.run('git log --oneline');
  if (!log.stdout.includes('Add remote news')) {
    return context.fail('Pull the Add remote news commit into local history.');
  }

  const aheadBehind = await context.terminal.run('git rev-list --left-right --count HEAD...origin/main');
  if (aheadBehind.stdout.trim() !== '0\t0' && aheadBehind.stdout.trim() !== '0 0') {
    return context.fail('Local main should be synchronized with origin/main after git pull.');
  }

  return context.pass('Fetched and pulled a collaborator change from origin.');
};
