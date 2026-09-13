https://okromchedlishvili.github.io/
Get-ChildItem *.avif | Select-Object Name | ConvertTo-Json | Out-File -Encoding utf8 ../../(name).json