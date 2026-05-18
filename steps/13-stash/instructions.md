# Stash Interrupted Work

Use `stash` when you are mid-change and need to switch context.

Why this matters: real work is interrupted. You may need to pull a teammate's change, switch branches, or make an urgent fix before your current edit is ready to commit. Stash gives you a temporary shelf for unfinished work.

Stash is not a replacement for commits. Use it for short-lived work you intend to return to soon.

Start some work:

```bash
printf "\nWIP stash practice\n" >> src/app.txt
```

The course also added [docs/stash-note.md](open:docs/stash-note.md) as an untracked file.

Stash both tracked and untracked work:

```bash
git stash push -u -m "wip training note"
git status
```

Make a quick hotfix:

```bash
printf "# Hotfix\n\nHandled while work was stashed.\n" > hotfix.md
git add hotfix.md
git commit -m "Apply hotfix while stashed"
```

Bring your work back and commit it:

```bash
git stash pop
git add src/app.txt docs/stash-note.md
git commit -m "Apply stashed training note"
git stash list
```

What to notice:

- `-u` includes untracked files, which plain `git stash` would leave behind.
- `git stash pop` reapplies the saved changes and removes that stash entry if successful.
- The hotfix commit stays separate from the interrupted work, keeping history easier to review.

Learn more:

- [Pro Git: Stashing and Cleaning](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning)
- [git stash reference](https://git-scm.com/docs/git-stash)
- [git clean reference](https://git-scm.com/docs/git-clean)

Run **Instrktr: Check My Work** after the stash is empty and both commits exist.
