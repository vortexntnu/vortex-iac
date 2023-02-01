#!/bin/bash

# This file was curated by Vortex - DevOps
# If any questions contac vortex devops

# source files and declere global variable
# -----------------------------------------------------------------------------------------------------------
source progress.sh # progress bar

# init enviorment
# -----------------------------------------------------------------------------------------------------------

echo -ne "\n!## Initialize environment ##!\n\n"

apt-get update -qq | echo -ne "Updating apt\n"
apt-get upgrade -qq | echo -ne "Upgrading apt\n"
apt-get install -yqq openssh-server | echo -ne "Installing ssh\n"
apt-get install -yqq bc | echo -ne "Installing bc\n"

# launch beluga
# -----------------------------------------------------------------------------------------------------------

echo -ne "\n!## launching beluga ##!\n\n"

tasks=(
    "handshake",
    "evironment check",
    "evironment update/install",
    "ros node check",
    "ros node update/install",
    "start ros",
    "suport scripts",
)


tasks_in_total=37
for current_task in $(seq $tasks_in_total) # simulates progress... 
    do
    sleep 0.2 #simulate the task running
    msg=$(echo "msg of some kind")
    error="false"

    if [ $current_task -eq 60 ]; then
        msg=$(echo "problem with task ${current_task}")
        error="true"
        show_progress $current_task $tasks_in_total $error $msg
        break
    else
        show_progress $current_task $tasks_in_total $error $msg
    fi
done

printf "\n"

# search network
# create handshacks with rpi and xavier

# start shit on rpi

# start shit on xavier

# input mode - remote control, auto, sw FAT

# if remote check joysick connection
# setup

# if auto
# give option for ...

# log stuff...