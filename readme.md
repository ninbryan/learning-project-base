# Brackets Text Editor - Learning Project Base

- disable JSLint
- revise ESLint ruleset (ES2015 browser support)
- include SASS compiler in gulp task runner
 - include source map

## Environnment Steps 

### for Windows

1. Download [Chocolatey](https://github.com/ninbryan/computer-setup/blob/master/windows-powershell-install-chocolatey.md)
    - instructions include installing NodeJS & Git + Git Bash
2. `choco install Brackets -y`
    - Brackets may be old version, update when you can.
3. Open Brackets
4. Revise brackets setup
    - disable JSLint
        - Go to Extension Manager
        - Select `Default` tab, may be slow on transition
        - Go to search field and enter `JSLint`
        - Click `Disable`
        - Click `Close`
        - Click `Disable Extensions and Reload`, editor should flash white
    - From the navigation bar, select `Debug` > `Open Preferences File`
    - should be similar to [brackets.json](environment/windows/brackets.json)

### for Mac/Linux

TBD

## Gulp Tasks

- `npm run gulp -- -T` for list of tasks
- `npx gulp -T` for list of tasks
- `npx gulp sass:watch` to watch scss file changes

## Results

Due to Brackets having it's own live preview implementation,
the sourcemap and source content do not update unless you reload the browser page.

If visual change is the necessary requirement, this works fine.

gulp-sass still dependently installs node-sass, but I want to use dart-sass implementation. haven't confirmed if implementation works as intended.