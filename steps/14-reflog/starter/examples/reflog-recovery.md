# Reflog Recovery

`git reflog` records where HEAD and branch tips have been.

If you reset away a local commit by mistake, find its hash in `git reflog` and recover it with:

```bash
git cherry-pick <hash>
```

or, if you truly want to move the branch back:

```bash
git reset --hard <hash>
```
