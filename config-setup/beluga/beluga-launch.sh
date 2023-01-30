#!/bin/bash

# This file was curated by Vortex - DevOps

source progress.sh

printf "!## Lauch beluga ##!"

printf "\n\n"

tasks_in_total=37
for current_task in $(seq $tasks_in_total) 
    do
    sleep 0.2 #simulate the task running
    show_progress $current_task $tasks_in_total
done

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