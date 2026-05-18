# Stage and Commit

Git does not save every file automatically. You choose what goes into the next commit by staging files.

Run:

```bash
git status
git add README.md src/app.txt
git status
git commit -m "Initial project snapshot"
git log --oneline
```

Leave `docs/terms.md` uncommitted for now. That gives you an extra file to inspect later.

Run **Instrktr: Check My Work** after the first commit exists.
