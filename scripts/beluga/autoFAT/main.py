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

def main() -> bool:
    # --------------------------------------------
    # - setup
    # --------------------------------------------

    print("auto FAT v0.1.0")

    print(print_mute, end="")

    print("[0] - Validate environment")
    for pkg in env_pkgs:
        if not bash.hasDPKG(pkg):
            if not bash.installDPKG(pkg):
                print("[0] - Unable to install ", pkg, sep="")
                return False

    print("[0] - Load config")
    config = yaml.read(yaml_config)

    print(print_nc, end="")

    print(config)

    # --------------------------------------------
    # - not setup
    # --------------------------------------------
    console = Console(theme = Theme({
        "bar.complete": "cyan",
        "bar.finish": "green",
    }))

    with Progress(
        TextColumn("[progress.description]{task.description}"),
        BarColumn(
            complete_style='cyan', 
            finished_style='green'),
        TaskProgressColumn(),
        TimeElapsedColumn(),    
    ) as progress:

        task1 = progress.add_task("[dim]Setup...", total=1000)
        task2 = progress.add_task("[cyan]Starting...", total=1000)

        while not progress.finished:
            progress.update(task1, advance=10)
            progress.update(task2, advance=1)
            time.sleep(0.02)

    return True

# --------------------------------------------

if __name__ == "__main__":
    if main():
        print(print_success, "Done", print_nc, sep="")
    else:
        print(print_error, "Error", print_nc, sep="")