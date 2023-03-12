#!/usr/bin/env python

# imports
from rich.progress import Progress, TextColumn, BarColumn, TaskProgressColumn, TimeElapsedColumn
from rich.theme import Theme
from rich.console import Console
import time

# import scripts
from scripts import bash
from scripts import yaml

# --------------------------------------------
# - variables
# --------------------------------------------

# environment need these packages
env_pkgs = [
    "openssh-client",
    "iputils-ping",
]

# yaml config file
yaml_config = "config.yaml"

# print msg color
print_mute      = "\x1b[1;30m"
print_success   = "\033[32m"
print_warning   = "\033[0;33m"
print_error     = "\033[0;31m"
print_nc        = "\033[0m"

# fat report
devops_fat      = [False, "Not reached"]
perception_fat  = [False, "Not reached"]
autonomous_fat  = [False, "Not reached"]

def main() -> bool:
    # progress bar
    with Progress(
        TextColumn("[progress.description]{task.description}"),
        BarColumn(complete_style="cyan", finished_style="green"),
        TaskProgressColumn(),
        TimeElapsedColumn(),    
    ) as progress:
        autofat = progress.add_task("[cyan]AutoFAT ", total=9)
        
        # --------------------------------------------
        # - setup
        # --------------------------------------------

        # check enviorment, is correct packages installed?
        for pkg in env_pkgs:
            # res, msg = bash.hasDPKG(pkg)
            if bash.hasDPKG(pkg):
                progress.advance(autofat)
            else:
                return False
            
        # load config
        config = yaml.read(yaml_config)
        if not config:
            print("\033[0;31m", "Error: ", "\033[0m", "failed to read yaml config.", sep="")
            return False
        progress.advance(autofat)

        # --------------------------------------------
        # - DevOps fat
        # --------------------------------------------

        devops_fat[1] = "Failed"

        for device in config['network']:
            if not bash.ping(device['ip_address']):
                return False
            progress.advance(autofat)
            
            bashrc = bash.getBashrc(device['ip_address'], device['user'], device['password'])
            if not bashrc:
                return False
            progress.advance(autofat)

            # compare
            progress.advance(autofat)
        
        devops_fat[1] = "Success"
        devops_fat[0] = True

    return True

# --------------------------------------------

def raport():
    if devops_fat[0]:
        print("\nDevOps FAT: \t\t", "\033[32m", devops_fat[1], "\033[0m", sep="")
    else: 
        print("\nDevOps FAT: \t\t", "\033[0;31m", devops_fat[1], "\033[0m", sep="")

    if perception_fat[0]:
        print("Perception FAT: \t", "\033[32m", perception_fat[1], "\033[0m", sep="")
    else:
        print("Perception FAT: \t", "\033[0;31m", perception_fat[1], "\033[0m", sep="")
    
    if autonomous_fat[0]:
        print("autonomous FAT: \t", "\033[32m", autonomous_fat[1], "\033[0m", sep="")
    else:
        print("autonomous FAT: \t", "\033[0;31m", autonomous_fat[1], "\033[0m", sep="")

# --------------------------------------------

if __name__ == "__main__":
    print("\x1b[1;30m", "auto FAT v0.2.0", "\033[0m", sep="")
    if main():
        print("\033[32m", "Done", "\033[0m", sep="")
    else:
        print("\033[0;31m", "Error", "\033[0m", sep="")

    raport()