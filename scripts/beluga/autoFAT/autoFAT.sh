#!/bin/bash

# List of required packages
required_packages=("rich" "pyyaml")

# Flag to keep track of package installation status
packages_installed=true

# Check if each required package is installed
for package in "${required_packages[@]}"
do
    if ! python -c "import $package" &> /dev/null; then
        echo "$package is not installed"
        packages_installed=false
    fi
done

# If all packages are installed, run the main.py script
if [ "$packages_installed" = true ]; then
    python main.py
else
    echo "Cannot run main.py because packages are missing"
fi