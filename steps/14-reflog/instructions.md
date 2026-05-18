# Recover with Reflog

This final lesson proves that many local Git mistakes are recoverable.

Why this matters: Git records recent movements of `HEAD` and branch tips in the reflog. If you reset away a local commit, switch branches unexpectedly, or lose track of where work went, reflog can often show the commit hash you need.

Reflog is local to your repository. It is mainly a recovery tool for your own recent activity, not a shared project history.

Create a commit:

```bash
printf "# Rescue Note\n\nRecovered with reflog.\n" > rescue.md
git add rescue.md
git commit -m "Add rescue note"
```

Now make it disappear from the current branch:

```bash
git reset --hard HEAD~1
```

Find it:

```bash
git reflog --oneline
```

Recover it. You can either cherry-pick the lost commit:

```bash
git cherry-pick <lost-commit-hash>
```

or move the branch back to it:

```bash
git reset --hard <lost-commit-hash>
```

What to notice:

- The commit can disappear from `git log` but still appear in `git reflog`.
- `cherry-pick` copies the lost commit back onto your current branch.
- `reset --hard <hash>` moves the branch itself back to that commit, which is stronger and should be used carefully.

Learn more:

- [Pro Git: Maintenance and Data Recovery](https://git-scm.com/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery)
- [git reflog reference](https://git-scm.com/docs/git-reflog)
- [git cherry-pick reference](https://git-scm.com/docs/git-cherry-pick)

Run **Instrktr: Check My Work** after [rescue.md](open:rescue.md) is back and the current history contains `Add rescue note`.
