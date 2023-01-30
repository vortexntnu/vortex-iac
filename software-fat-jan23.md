# Software FAT

Hei this is a document for software fat.

You will be promted to open a new terminal, this do not mean you should close the exsisting terminal.

### init

Use the crap-top

Check batteries, use a voltmeter to controlle the batteri charges, the batteries are fully charged if the voltage is 16.8v (see wiki page about batteries).

## Connect to beluga

There is aliases for connecting to the varius computing node of beluga. Use bachrc or aliases to list the different aliases.

```bash
$ cat ./bachrc
```
or
```bash
$ alias
```

beluga ip addresses
- rasberrypi = 
- xavior = 

The alias "rpi" connects you to the rasberrypi and alias "xavier" connects you to the xavier, both on beluga.

## On rasberrypi

We run the autonomus stack on the rasberrypi

### Start the roscore

SSH to rasberrypi.

```bash
$ rpi
```

start the roscore

```bash
$ roscore
```

### Setup rasberrypi 

This start all functions needed to begin our code....

On a new terminal SSH to rasberrypi agien, change your location to the launch files and start beluga.launch.

```bash
$ rpi
$ cd /vortex_ws
$ roslaunch auv_setup beluga.launch
```
Does this not work try sourcing the workspace.

```bash
$ source devel/setup.bash
```

## On Xavier

We run the perception stack on xavier.

What to do if the xavier randomly turns off.
1. Observ the xavier light
2. Try use the xavier
3. Just ask electronical...

### Do something

Open a new terminal and SSH to xavier.

```bash
$ xavier
```

When promted with a password it is usaly one of the following
- gladlaks
- vortex




FAT fail







