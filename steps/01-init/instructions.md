# Initialize a Repository

Start by turning this folder into a Git repository.

Run these commands from the workspace root:

```bash
git init -b main
git config user.name "Git Student"
git config user.email "student@example.com"
git status
```

If your Git does not support `git init -b main`, use:

```bash
git init
git branch -M main
```

Notice the difference between files Git knows about and files that are still untracked.

Run **Instrktr: Check My Work** when `git status` works and the current branch is `main`.
