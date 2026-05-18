module.exports = async function validate(context) {
  const app = await context.files.read('src/app.txt');
  if (app.includes('Feature flag: on')) {
    return context.fail('Use git revert so src/app.txt no longer contains Feature flag: on.');
  }

  const log = await context.terminal.run('git log --oneline --max-count=8');
  if (!log.stdout.includes('Enable experimental flag')) {
    return context.fail('First create the bad commit: Enable experimental flag.');
  }

  if (!log.stdout.includes('Revert "Enable experimental flag"')) {
    return context.fail('Use git revert --no-edit HEAD to create a revert commit.');
  }

  return context.pass('Bad commit was safely reverted with an audit-trail commit.');
};
