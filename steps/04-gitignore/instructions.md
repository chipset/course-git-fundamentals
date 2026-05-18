# Ignore Generated Files

Generated logs, caches, build outputs, and secrets should not be committed.

Why this matters: repositories should contain source and durable project assets, not machine-specific clutter. Ignoring generated files keeps diffs readable, avoids accidental secret exposure, and prevents one person's local environment from polluting everyone else's workspace.

Create [`.gitignore`](open:.gitignore) with:

```gitignore
logs/
temp/
*.tmp
```

Then verify:

```bash
git status --ignored
git check-ignore logs/app.log temp/cache.tmp
git add .gitignore
git commit -m "Ignore generated files"
```

What to notice:

- `.gitignore` itself should be committed because it is a team rule.
- Ignored files can still exist locally.
- `git check-ignore` explains whether a path is ignored before you accidentally commit it.

Learn more:

- [Pro Git: Ignoring Files](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring)
- [gitignore reference](https://git-scm.com/docs/gitignore)
- [git check-ignore reference](https://git-scm.com/docs/git-check-ignore)

Run **Instrktr: Check My Work** after `.gitignore` is committed.
