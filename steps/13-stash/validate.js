module.exports = async function validate(context) {
  if (!await context.files.exists('hotfix.md')) {
    return context.fail('Create and commit hotfix.md while the other work is stashed.');
  }

  if (!await context.files.exists('docs/stash-note.md')) {
    return context.fail('Pop the stash so docs/stash-note.md returns.');
  }

  const app = await context.files.read('src/app.txt');
  if (!app.includes('WIP stash practice')) {
    return context.fail('Pop and commit the stashed src/app.txt change.');
  }

  const stash = await context.terminal.run('git stash list');
  if (stash.stdout.trim()) {
    return context.fail('The stash should be empty after git stash pop.');
  }

  const log = await context.terminal.run('git log --oneline --max-count=10');
  if (!log.stdout.includes('Apply hotfix while stashed') || !log.stdout.includes('Apply stashed training note')) {
    return context.fail('Commit both the hotfix and the restored stashed work.');
  }

  return context.pass('Stash workflow completed: save work, hotfix, pop, and commit.');
};
