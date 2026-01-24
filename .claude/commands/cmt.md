---
description: Generate a commit message for current staged/unstaged changes
allowed-tools: Bash(git:*), AskUserQuestion
---

# Generate Commit Message

Generate a conventional commit message for the current branch changes.

## Process

### 1. Gather changes
```bash
git status --short
git diff --stat
git diff --cached --stat
```

### 2. Analyze changes
- Review staged and unstaged changes
- Identify the main type of change (feat, fix, refactor, docs, test, chore)

### 3. Generate commit message

Follow conventional commits format:
```
<type>: <short description>

- <bullet point explaining change>
- <additional bullet if needed>
```

## Commit Types
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code restructuring without behavior change
- `docs`: Documentation only
- `test`: Adding or updating tests
- `chore`: Build, config, or tooling changes

## Output Rules
- Output the commit message in a code block for easy copy/paste
- First line: type and concise description (<50 chars)
- **Never use scopes** - use `feat:` not `feat(scope):`
- **Body must use bullet points** - no prose paragraphs
- Use imperative mood ("add" not "added")
- No period at the end
- Be specific but brief

## Writing Style
- Every word must earn its place
- Title: describe the "what"
- Body: bullet points explaining key changes (if needed)

## Examples
```
feat: add wave height chart controls
```

```
refactor: move chart color indicator to left border

- Align indicators with reading direction
- Improve visual hierarchy
```

### 4. Ask to commit

Use the AskUserQuestion tool to ask if they want to commit with options:
- "Yes, commit"
- "Edit message"

If confirmed, stage and commit using heredoc format:

```bash
git add -A && git commit -m "$(cat <<'EOF'
<title>

<body>
EOF
)"
```
