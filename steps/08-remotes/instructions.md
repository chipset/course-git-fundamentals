# Create and Push to a Remote

Remote repositories are shared copies. In this course, the remote is local and credential-free.

Why this matters: Git is distributed. Your local repository has its own complete history, and a remote is another repository you exchange commits with. In real teams, that remote often lives on GitHub, GitLab, Bitbucket, or an internal server.

This lesson uses a local bare repository so you can learn the same push/tracking concepts without accounts or network setup.

From the workspace root, run:

```bash
git init --bare ../git-fundamentals-remote.git
git remote add origin ../git-fundamentals-remote.git
git push -u origin main
git remote -v
git branch -vv
```

`origin` is just the conventional name for the default remote. The `-u` flag sets `main` to track `origin/main`.

What to notice:

- A bare repository stores Git history but has no normal working tree.
- `origin` is a nickname, not a magic server.
- Upstream tracking lets later `git pull` and `git push` know which remote branch to use.

Learn more:

- [Pro Git: Working with Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
- [git remote reference](https://git-scm.com/docs/git-remote)
- [git push reference](https://git-scm.com/docs/git-push)

Run **Instrktr: Check My Work** after the push succeeds.
