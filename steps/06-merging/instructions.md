# Merge a Feature Branch

Bring the feature branch back into `main`.

Why this matters: branching separates work; merging integrates it. A merge says "take the work proven on this branch and include it in the main line."

This lesson uses a merge commit on purpose. In many teams, merge commits preserve the fact that a feature was developed as a unit, even if the individual commits inside it are small.

Run:

```bash
git switch main
git merge --no-ff feature/profile-card -m "Merge profile card"
git branch --merged
```

The `--no-ff` option is used here so you can clearly see a merge commit in history.

What to notice:

- You merge into the branch you currently have checked out.
- `git branch --merged` helps confirm which branches are already integrated.
- After a branch is merged, deleting the branch name does not delete the commits if they are reachable from `main`.

Learn more:

- [Pro Git: Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
- [git merge reference](https://git-scm.com/docs/git-merge)
- [git branch reference](https://git-scm.com/docs/git-branch)

Run **Instrktr: Check My Work** after `profile.md` is present on `main`.
