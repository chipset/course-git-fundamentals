# Resolve a Merge Conflict

Conflicts happen when Git cannot automatically combine two edits to the same lines.

Why this matters: conflicts are normal collaboration signals, not disasters. Git is telling you that two histories made incompatible edits and a human needs to choose the final content.

The important skill is learning to read the conflict markers and make an intentional resolution, then test or inspect the result before committing.

Create a branch and commit one edit:

```bash
git switch -c conflict/copy-edit
```

Change the `Role:` line in [profile.md](open:profile.md) to:

```text
Role: Feature editor
```

Then:

```bash
git add profile.md
git commit -m "Edit role on conflict branch"
```

Create the competing edit on `main`:

```bash
git switch main
```

Change the same `Role:` line to:

```text
Role: Main editor
```

Then:

```bash
git add profile.md
git commit -m "Edit role on main"
git merge conflict/copy-edit
```

Git should stop with conflict markers in `profile.md`. Resolve the file so the final line is:

```text
Role: Collaborative editor
```

Finish the merge:

```bash
git add profile.md
git commit -m "Resolve profile role conflict"
```

What to notice:

- Conflict markers show your current branch, the separator, and the incoming branch.
- The correct answer is not always "pick one side." Here you write a third final version.
- `git add` marks the conflict as resolved because you are staging the final content.

Learn more:

- [Pro Git: Basic Merge Conflicts](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merge_conflicts)
- [GitHub Docs: About merge conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)
- [git merge reference](https://git-scm.com/docs/git-merge)

Run **Instrktr: Check My Work** after the merge conflict is resolved.
