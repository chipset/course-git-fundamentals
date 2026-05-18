# Reset Local Commits

`git reset` moves your current branch. Use it only for local history you have not shared.

Why this matters: reset is powerful because it changes what commit a branch name points to. That is useful for cleaning up private local work, but risky for shared branches because other people may already be building on the commits you remove.

This step uses `--hard` only because the commit is deliberately disposable training work.

Create a normal commit:

```bash
printf "Reset practice baseline\n" > reset-practice.txt
git add reset-practice.txt
git commit -m "Add reset practice file"
```

Create a disposable commit:

```bash
printf "Throwaway line\n" >> reset-practice.txt
git add reset-practice.txt
git commit -m "Temporary reset experiment"
```

Remove only the disposable commit:

```bash
git reset --hard HEAD~1
git log --oneline
git reflog --oneline
```

The branch no longer contains `Temporary reset experiment`, but `reflog` still remembers where HEAD used to be.

What to notice:

- `--hard` changes the branch, staging area, and working tree together.
- The commit is removed from normal branch history, not immediately destroyed.
- `reflog` is your safety net for recent local branch movement.

Learn more:

- [Pro Git: Reset Demystified](https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified)
- [git reset reference](https://git-scm.com/docs/git-reset)
- [git reflog reference](https://git-scm.com/docs/git-reflog)

Run **Instrktr: Check My Work** after the throwaway line is gone.
