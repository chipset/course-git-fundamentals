# Inspect Diffs and History

Before committing, inspect what changed.

Why this matters: reviewing your own diff is one of the highest-value Git habits. It catches accidental edits, debug text, formatting noise, and unrelated changes before they become part of history.

`git diff` answers "what changed but is not staged yet?" while `git diff --staged` answers "what exactly will be committed?"

Edit [src/app.txt](open:src/app.txt) so it contains:

```text
Version: 2
```

Then add one sentence to [docs/git-notes.md](open:docs/git-notes.md).

Practice the inspection commands:

```bash
git status
git diff
git add src/app.txt docs/git-notes.md
git diff --staged
git commit -m "Document status and diff"
git log --oneline --graph --decorate
```

What to notice:

- `status` summarizes state.
- `diff` shows content changes.
- `log` shows committed history.
- `--graph --decorate` makes branches and named refs easier to see later.

Learn more:

- [Pro Git: Viewing the Commit History](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)
- [git diff reference](https://git-scm.com/docs/git-diff)
- [git log reference](https://git-scm.com/docs/git-log)

Run **Instrktr: Check My Work** after the commit.
