# Modifications sur Le server MX

{TOC}  
[TOC]

## Discord bot
Mise en place d'un lancement automatique de discordBot.

```bash
xfce4-terminal --default-working-directory="/mnt/RaidData/BOT DISCORD/" -T Bot-Discord -x python3 bot.py
```

## docker
Mise en place de plusieurs services dockers:

```bash
sudo apt install docker.io
sudo docker run -d --restart unless-stopped --name=flaresolverr -p -p 8191:8191 ghcr.io/flaresolverr/flaresolverr

```

Utilisation de flaresolverr avec le crontab :

```bash
cd /mnt/RaidData/Vidéo/Seedbox/ && python3 flaresoverr-torrent.py
```


autres services :
```bash
sudo docker pull trueosiris/vrising
sudo docker run -d --name honeygain --restart unless-stoped honeygain/honeygain -tou-accept -email interroliste@gmail.com -pass ZNtzYVKjZYeVy2A -device LabnaServerMX
```

Pour voir tous les services:
```
sudo docker ps -a
sudo docker update --restart unless-stopped flaresolverr
```

### Pour mettre à jour un container

Lister les images et les containers :

```bash
$ sudo docker images
REPOSITORY                          TAG       IMAGE ID       CREATED        SIZE
honeygain/honeygain                 latest    07d3719b0df5   9 days ago     102MB
ghcr.io/flaresolverr/flaresolverr   latest    04791b8db4ef   3 months ago   593MB
trueosiris/vrising                  latest    2d4b9135340d   7 months ago   2.39GB
$ sudo docker container ls
 - ou -
$ sudo docker ps -a
CONTAINER ID   IMAGE                               COMMAND                  CREATED          STATUS          PORTS                                                           NAMES
6cadbb5d2447   honeygain/honeygain                 "./honeygain -tou-ac…"   22 seconds ago   Up 21 seconds                                                                   honeygain
a3241d7290f1   trueosiris/vrising                  "/start.sh"              2 months ago     Up 6 days       0.0.0.0:9876-9877->9876-9877/udp, :::9876-9877->9876-9877/udp   vrising
70bd4146ae2b   ghcr.io/flaresolverr/flaresolverr   "/usr/bin/dumb-init …"   2 months ago     Up 6 days       0.0.0.0:8191->8191/tcp, :::8191->8191/tcp, 8192/tcp             flaresolverr
```

Récupérer la dernière image disponible:
```bash
$ sudo docker pull honeygain/honeygain:lastest
latest: Pulling from honeygain/honeygain
4f4fb700ef54: Pull complete 
Digest: sha256:56568cc7c554af248c0d106f2c21b9f6cc4527815d03d49d81040c6dfc8311e3
Status: Downloaded newer image for honeygain/honeygain:latest
docker.io/honeygain/honeygain:latest
```

On arrète notre ancienne version :

```bash
$ sudo docker stop honeygain
```

puis l'on supprime l'ancien container :

```bash
$ sudo docker rm 6cadbb5d2447
```

Ainsi quel l'ancienne image :

```bash
$ sudo docker rmi 07d3719b0df5
```

et on peut redémarrer notre service avec la nouvelle image :

```bash
$ sudo docker run -d --name honeygain --restart unless-stopped honeygain/honeygain -tou-accept -email interroliste@gmail.com -pass ZNtzYVKjZYeVy2A -device LabnaServerMX
6cadbb5d2447ea4dc0da70a03966aeb08e2b6271f0bd45cac6d945ead3c6cb0e
```

## Inversion des canaux droite et gauche

First, get sink (device) name:

```
$  pactl get-default-sink
...
Name: device-xxx
```
Reverse channels:

```
$ pacmd load-module module-remap-sink master=alsa_output.pci-0000_04_00.0.analog-stereo sink_name=Inversed-PA sink_properties=device.description=Inversed-PA channels=2 channel_map=front-left,front-right master_channel_map=front-right,front-left
```
where:
  master= the device according pactl output.
  sink_name= is for pulseaudio.
  sink_properties=device.description= is for pavucontrol.

Last, select:

```
$ pactl set-default-sink Inversed-PA
```

And/or : pavucontrol make the change accordingly

## Résoudre le problème de mise à jours à cause du driver nvidia

<https://stackoverflow.com/a/77977094>

>I did this on my debian 12 and it worked for me: 1.Use synaptic to search for linux-image-6.1.18-amd64 and select for complete removal. and apply 2. run sudo apt autoremove 3. run sudo update-grub2 4. reboot - It should reboot to the 6.1.17 kernel. NVIDIA drivers still work.

## Gestion des packages Pip3

### Pour les packages utilisateurs seulement

Il faut les packages dev de python :

```bash
sudo apt install python3-dev
```

Il faut crée un dossier exemple `~/.venvs/foo` et y exécuter l'instalation d'un environement local

```bash
$ python3 -m venv ~/.venvs/foo
```

Puis y installer le module souhaité:

```bash
$ ~/.venvs/foo/bin/python -m pip install foo
```

#### Exemple pour installer le driver pour manette PS4 : <https://github.com/chrippa/ds4drv>

```bash
mkdir ~/.venvs/ds4drv
python3 -m venv ~/.venvs/ds4drv
~/.venvs/ds4drv/bin/python -m pip install ds4drv
```

Qui sera exécuté via la commande : `pkexec /home/Labna/.venvs/ds4drv/bin/python -m ds4drv --hidraw`  
: hidraw pour le support du filaire avec Bluetooth et non Bluetooth seul
: avec les accès root pour modifier les périphériques

##### Ou si vous ne voulez pas le lancer en root :

1. copier le fichier : <https://github.com/chrippa/ds4drv/blob/master/udev/50-ds4drv.rules> dans `/etc/udev/rules.d/`
2. Recharger les règles avec :  
    `sudo udevadm control --reload-rules`  
    `sudo udevadm trigger`
3. lancer ds4drv avec :  
    `~/.venvs/ds4drv/bin/python -m ds4drv --hidraw`
4. Faite les configuration que vous voulez en éditant le fichier `~/.conf/ds4drv.conf` (à crée s'il n'existe pas)  
    se basé sur celui par défaut : <https://github.com/chrippa/ds4drv/blob/master/ds4drv.conf>

Si la commande s'est bien exécuter la console devrais être ouverte avec :
```bash
[info][controller 1] Created devices /dev/input/js1 (joystick) /dev/input/event15 (evdev) 
[info][controller 1] Connected to USB Controller (D0:27:88:56:EF:76 D0:27:88:56:EF:76 hidraw2)
[info][hidraw] Scanning for devices
[info][controller 1] Battery: Fully charged
```


### Pour les packages system-wide

ne pas le faire !

sources : 

 * /usr/share/doc/python3.11/README.venv
 * <https://stackoverflow.com/questions/21530577/fatal-error-python-h-no-such-file-or-directory>