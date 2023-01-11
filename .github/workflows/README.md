# Workflows

## Formatters
### clang-format-check.yml
- Checks format of C and C++ files
- Workflow fails if format is wrong

### format_cpp.yml
- Formats C and C++ files in the repo
- Changes the files and pushes a new commit

### black-format-check.yml
- Checks format of python files
- Workflow fails if format is wrong

### fix-formatting.yml
- Formats python, C and C++ files in the repo
- Changes the files and pushes a new commit

### python-formatter.yml
- Formats python files in the repo
- Changes the files and pushes a new commit