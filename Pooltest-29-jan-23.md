# Pooltest 29.01.23 :whale:

```yaml
date: 29.01.23
place: acustics lab
attendies:
  - DevOps
  - Perception
  - Autonomus
  - Electronical
  - Christopher Strøm
Author: Fabian Kongelf
```

Short doc on pooltest 29. jan 2023.

**NOTE:** The numbers and actions stated in this document are ment as a guild only and not accurate the people partisipaiting in a pooltest should use their experience and knowledge.

## Start / init :runner:

Check the voltage of the batteries.

- Batteris should be at 16+ V (prob not 17V)
- You need two batteries, both should be at the same voltage (+- 0.1v)

Charge batteries with mode "balacing mode", four battery celles and 3.0A.

Vacume seal el-huset (the tube containing the electronincs) and the battary module (tube containg the batteries). Start by using the electric vacume pump. There is a blue and red seal, blue should be connected to beluga while red to the vacume pump (they ensure a good air seal, mening when you decouple dem the air does not leak back into the modules). The air presure should be close to -15 psi, the electric vacume pump is not accurate enough (use it close to a green line), thus you should get an aproximet with the electric pump and use the hand pump to get the accurate pressure. Leave the hand pump attached for 10min and observe the reading, if after 10min the pressure has changed their is a leak in the module. As the battery module is much smaller you dont need to use the electric vacum pump (but you have to use the hand pump).

How to use the electric vacume pump, ensure all connections are tight. Blue ventil should be open (and connected to the module) while red ventil should be closed. If you can hear airflow something is not tight.

Check correct files on rasberrypi and xavior. To access rasberrybi use the alias:

```bash
$ rpi
```

or xavior:

```bash
$ xavior
```

If either the rassberry or xavior lack some file, git clone or pull the nessesery file and use scp to copy the file to either rasberrypi or xavior:

```bash
$ scp -r /folder_location user@ip-addres:/copy_location
```

This command copies files from the current computer to a remote location.

To use the truster, run the script activate_trusters.sh in the scripts folder.

```bash
$ cd vortex_ws/src/Vortex-AUV/scripts
$ ./activate_truster.sh
```

## Perception sonar test :eyes:

Perception tested sonar.

Henrik write some documentation...

## Autonomus DP test :computer:

Test started with catkin clean and build.

```bash
$ cd vortex_ws
$ catkin clean
$ catkin build
```

Start with DP launch.

Encountered issue with running c++ code on ros. Error messages seam to indicate that comments in the c++ document are interpreted as refrences to files or directories. Later it become clear that the code was executed wrongly, c++ ros nodes should be launched using the name stated in cmakelists, this was achived by adding "add executable" somewhere... (see Ronja at autonomus or Christopher for more details).

## Problems :warning:

Problemes encounterd at pooltest.

### :exclamation: Voltage problem

Thruster interface mesured a voltage, used to determin thruster power (which fluxuate as voltage change). The power is then detemind by a lookup table where the variouse voltages to power are determind, however if the voltage is outside of the lookup tables range no default value is given and joystick becomes unresponsive and beluga will go in the direction stated by first command.

**Hotfix:** Change callback for voltate on thurster interface (scripts/thurster_interface_node.py) in function voltage_cb, to give a constant value.

**TODO:** Revise how thruster interface handles voltage input, can thruster interface acsept high values (but give a warning).

### :exclamation: Different nameing conventions

There are differences in how names are set and used, some folder have capital letters while most have only lowercase letters and there are differences in how space is handles ether "_" or "-", pick one.

**TODO:** Revise how nameing conventions are used, create a document on how names should be, can a github action be created to force nameing convention?

### :exclamation: Monocamera and sterocamera did not work

Henrik perception where unable to start either the monocamera or stereocamera. Xavior shut down when attemted to start stereocamera.
Monocamera worked after a dry test after inital fail.

**TODO:** continue to test stereocamera and xavior interactions.
