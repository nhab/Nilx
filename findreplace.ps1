Get-ChildItem -Path "C:\root\prjs\github\mine\nhab.github.io" -Recurse | Select-String -Pattern "https://cdn.jsdelivr.net/gh/nhab/blocks@latest/blocks.js" | ForEach-Object { $_.Path | Set-Content $_.Path -Value (Get-Content $_.Path).Replace("https://cdn.jsdelivr.net/gh/nhab/blocks@latest/blocks.js", "https://cdn.jsdelivr.net/gh/nhab/blocks@latest/blocks.js") }

