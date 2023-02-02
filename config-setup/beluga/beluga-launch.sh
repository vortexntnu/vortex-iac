#!/bin/bash

# This file was curated by Vortex - DevOps
# If any questions contact vortex devops

# source files and decleare global variable
# -----------------------------------------------------------------------------------------------------------

source progress.sh # progress bar

echo -ne "beluga-launch v0.0.1\n\n"

# init enviorment
# -----------------------------------------------------------------------------------------------------------

echo -ne "\033[1;30m"
# echo -ne "Initialize environment...\n"
apt-get update -qq | echo -ne "Updating apt\n"
apt-get upgrade -qq | echo -ne "Upgrading apt\n"
apt-get install -yqq openssh-server | echo -ne "Installing ssh\n"
apt-get install -yqq bc | echo -ne "Installing bc\n"
echo -ne "\033[0m"

# launch beluga
# -----------------------------------------------------------------------------------------------------------

echo -ne "\nlaunching beluga \n"

tasks=(
    "handshake",
    "evironment check",
    "evironment update/install",
    "ros node check",
    "ros node update/install",
    "start ros",
    "suport scripts",
)

echo -ne "\n"

tasks_in_total=37
for current_task in $(seq $tasks_in_total) # simulates progress... 
    do
    echo -ne "\e[1A"
    sleep 0.2 #simulate the task running
    msg=$(echo "msg of some kind")
    error="false"
    echo -ne "\r[${current_task}] long and descriptive log message, which hopfuly are longer then the progress bar.       \n \033[2K \n"
    
    if [ $current_task -eq 40 ]; then
        msg=$(printf "problem with task ${current_task}")
        error="true"
        show_progress $current_task $tasks_in_total $error $msg
        break
    else
        show_progress $current_task $tasks_in_total $error $msg
    fi
    
done

printf "\n"
echo -ne "Beluga ready\n"

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