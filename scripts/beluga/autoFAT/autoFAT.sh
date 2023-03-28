#!/bin/bash

# List of required packages
required_packages=("rich" "PyYAML")

# Flag to keep track of package installation status
packages_installed="true"

# Check if each required package is installed
for package in ${required_packages[@]}
do
    if ! pip list | grep $package >/dev/null; then
        echo -ne "\033[0;33mWarning\033[0m: Python / pip module: $package is not installed, try pip install $package\n"
        packages_installed="false"
    fi
done

# If all packages are installed, run the main.py script
if [ $packages_installed == "true" ]; then
    python main.py
else
    echo -ne "\033[0;31mAbort\033[0m: did not launch autoFAT as python module is missing\n"
fi  