# Contributing Guidelines 👩🏻‍💻✨👨🏻‍💻

Thank you visiting and for your interest in collaborating to this project.

Please visit our [issues page](https://github.com/swfl-coders/tech-alliance-website/issues) for tasks we currently need help with. If you find an **issue** you would like to contribute, please comment on it, so others can see someone is already working on this. Please remember to make a reference to your **issue number** when you open your pull request.

**IMPORTANT:**

- Pull requests (PRs) will only be accepted if you've first claimed the issue and it has been assigned to you by the maintainers.
- We are only accepting PRs for existing issues on the issues page. If you'd like to propose something that is not listed, please create an issue and get approval from the maintainers before submitting a PR. 

## GIT & GitHub

### Rules

- Don't `push` to main only `pull` from git
- Branch names: lower-case with underscores separating words name it as close and brief to the feature you're creating like `script_folder` or simply `readme`
- Commit messages: a sentence in present-tense with punctuation that gives a decent description of what was done. For example, something as simple as "Adds readme file"

**IMPORTANT:** Please don't commit `package-lock.json` unless you added any packages to the project

### Workflow

🚀*Remember, it's just a web page, we can fix anything. Go crazy and ship code!*

1. You will need to 'Fork' this repository to your account
2. Next you will need to 'Clone' your fork to your computer
2. To sync the latest from the upstream (swflcoders project)
    * Add upstream: `git remote add upstream git@github.com:swfl-coders/tech-alliance-website.git`
    * Get latest from upstream: `git fetch upstream`
    * Checkout main branch: `git checkout main`
    * Bring in latest changes from upstream into your main branch: `git rebase upstream/main`
3. Create a new branch `git checkout -b name_of_feature_branch`
4. Code stuff 🙃
5. `git add .`
6. `git commit -m "Adds cool feature and closes #2"` (assuming you are working on `issue #2`)
7. `git push origin name_of_feature_branch`
8. Create a PR (pull request) in GitHub and tag an organizer for code review
9. Teammate/organizer leaves comments and/or merges your code
10. Feature branch deleted once successfully merged into GitHub main

### Helpful Git Commands

#### Non-changing

- `git status`
- `git log`
- `git branch`
- `git branch -a`
- `git checkout -b branch_name`
- `git checkout branch_name`

#### Changing

- `git add .`
- `git commit -m "Cool message in present tense"`

#### Move Code Around

- `git pull`
- `git push origin branch_name`
