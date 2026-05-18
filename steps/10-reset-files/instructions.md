# Reset and Restore Files

Use file-level recovery when you staged or edited something by mistake.

Why this matters: many Git mistakes are small. You may stage the wrong file or make a local edit you want to throw away. File-level restore commands fix those mistakes without rewriting project history.

This lesson separates two actions: unstaging a file and discarding a working-tree edit. They affect different parts of Git's model.

First commit the lab file:

```bash
git add reset-lab.txt
git commit -m "Add reset lab file"
```

Now create a bad edit and stage it:

```bash
printf "\nDO NOT KEEP\n" >> reset-lab.txt
git add reset-lab.txt
git status
```

Unstage the file without losing the edit:

```bash
git restore --staged reset-lab.txt
git status
```

Discard the working-tree edit:

```bash
git restore reset-lab.txt
git status
```

Older Git versions may show `git reset HEAD reset-lab.txt` for unstaging. The modern command is `git restore --staged`.

What to notice:

- `git restore --staged` moves content out of the staging area but keeps your file edit.
- `git restore` discards the working-tree edit by replacing it with the committed version.
- Always run `git status` between recovery commands so you know which layer changed.

Learn more:

- [Pro Git: Undoing Things](https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things)
- [git restore reference](https://git-scm.com/docs/git-restore)
- [git reset reference](https://git-scm.com/docs/git-reset)

Run **Instrktr: Check My Work** when the bad line is gone and there are no staged changes.
