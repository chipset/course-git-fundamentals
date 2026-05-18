# Fetch and Pull Remote Changes

Now simulate another collaborator.

Why this matters: collaboration means other people can add commits to the remote while you are working locally. You need to know how to inspect those commits before combining them with your branch.

`git fetch` updates your remote-tracking branches, such as `origin/main`, without changing your files. `git pull` fetches and then integrates the remote changes into your current branch.

From your workspace root:

```bash
git clone -b main ../git-fundamentals-remote.git ../git-collaborator
cd ../git-collaborator
git config user.name "Git Collaborator"
git config user.email "collaborator@example.com"
printf "# Remote News\n\nPulled from a collaborator clone.\n" > remote-news.md
git add remote-news.md
git commit -m "Add remote news"
git push
cd -
```

Back in your original workspace, inspect and bring in the change:

```bash
git fetch
git log --oneline HEAD..origin/main
git pull
```

What to notice:

- The collaborator clone represents another person with the same remote.
- `git log HEAD..origin/main` shows commits the remote has that your branch does not.
- Pulling is convenient, but fetching first gives you a chance to inspect before changing your working branch.

Learn more:

- [Pro Git: Fetching and Pulling from Your Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_fetching_and_pulling)
- [git fetch reference](https://git-scm.com/docs/git-fetch)
- [git pull reference](https://git-scm.com/docs/git-pull)

Run **Instrktr: Check My Work** after [remote-news.md](open:remote-news.md) exists locally.
