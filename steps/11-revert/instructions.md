# Revert a Commit Safely

Use `git revert` when a commit has already been shared or when you want a visible audit trail.

Why this matters: revert is the safest way to undo a committed change in shared history. It does not erase the original commit. Instead, it adds a new commit that applies the opposite change.

That makes revert ideal for production fixes, team branches, and any situation where other people may already have the original commit.

Create a bad commit:

```bash
printf "\nFeature flag: on\n" >> src/app.txt
git add src/app.txt
git commit -m "Enable experimental flag"
```

Now undo it safely:

```bash
git revert --no-edit HEAD
git log --oneline
```

The original bad commit remains in history, and a new revert commit records the undo.

What to notice:

- History tells both parts of the story: the mistake and the repair.
- Revert changes project content without moving branch pointers backward.
- Use revert when you want an undo that is safe to push.

Learn more:

- [Pro Git: Undoing Things](https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things)
- [git revert reference](https://git-scm.com/docs/git-revert)
- [Atlassian Git Tutorial: Resetting, checking out, and reverting](https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting)

Run **Instrktr: Check My Work** after `src/app.txt` no longer contains the feature flag.
