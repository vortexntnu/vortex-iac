# Pooltest 29.01.23

```yaml
date: 29.01.23
place: acustics lab
attendies:
  - Fabian Kongelf
  - Ronja
  - auto kar
  - Henrik (ikke perception)
```

short doc on pooltest 29. jan 2023.

**NOTE:** The numbers and actions stated in this document are ment as a guild only and not accurate the people partisipaiting in a pooltest should use their experience and knowledge.

[[toc]]

## start / init

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

