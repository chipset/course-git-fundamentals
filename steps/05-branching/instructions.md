# Create and Work on a Branch

Branches let you isolate a line of work.

Why this matters: a branch lets you try a change without disturbing the main line. Teams use branches so incomplete work, experiments, and review changes do not block stable code.

A branch is lightweight. It is mostly a name pointing at a commit, and Git moves that name forward as you commit.

Create a feature branch:

```bash
git switch -c feature/profile-card
```

Create [profile.md](open:profile.md) with:

```markdown
# Profile

Name: Git Student
Role: Learner
Favorite command: git status
```

Then commit it:

```bash
git add profile.md
git commit -m "Add profile card"
git log --oneline --decorate --graph
```

What to notice:

- `git switch -c` creates a branch and moves you onto it.
- Commits made here belong to this branch until you merge them elsewhere.
- `--decorate` shows branch names next to commits, which helps you see where work lives.

Learn more:

- [Pro Git: Branches in a Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
- [git branch reference](https://git-scm.com/docs/git-branch)
- [git switch reference](https://git-scm.com/docs/git-switch)

Stay on `feature/profile-card` and run **Instrktr: Check My Work**.
