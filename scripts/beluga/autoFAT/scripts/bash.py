#!/usr/bin/env python

import subprocess

def run(command: str) -> bool:
    # runs command
    result = subprocess.run(command, shell=True)

    # Check the command's return code (0 means success)
    if result.returncode == 0:
        # environment has pkg
        return True
    else:
        # environment dont have pkg
        return False

def ssh_run(ip: str, user: str, pwd: str, command: str) -> bool:
    pass

def hasDPKG(pkg: str) -> bool:
    # bash command to run ("> /dev/null 2>&1" removes output)
    command = 'dpkg -s ' + pkg + ' > /dev/null 2>&1'

    if run(command):
        return True
    else:
        print("\033[0;31m", "Error: ", "\033[0m", "Missing package: ", pkg, ", try: apt-get install ", pkg, sep="")
        return False

def ping(ip: str) -> bool:
    command = ""

    if run(command):
        return True
    else:
        print("\033[0;31m", "Error: ", "\033[0m", "Unable to ping/reach ", ip, sep="")
        return False

def getBashrc(ip: str, user: str, pwd: str) -> bool:
    command = ""

    if ssh_run(ip, user, pwd, command):
        return True
    else:
        print("\033[0;31m", "Error: ", "\033[0m", "Unable to fetch bashrc from ", ip, sep="")
        return False