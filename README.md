# docker_hub_cli

[![Docker Cloud build status](https://img.shields.io/docker/cloud/build/genzouw/docker_hub_cli?style=for-the-badge)](https://hub.docker.com/r/genzouw/docker_hub_cli/)
[![Docker Pulls](https://img.shields.io/docker/pulls/genzouw/docker_hub_cli.svg?style=for-the-badge)](https://hub.docker.com/r/genzouw/docker_hub_cli/)
[![Docker Cloud Automated build](https://img.shields.io/docker/cloud/automated/genzouw/docker_hub_cli.svg?style=for-the-badge)](https://hub.docker.com/r/genzouw/docker_hub_cli/)


[![dockeri.co](https://dockeri.co/image/genzouw/docker_hub_cli)](https://hub.docker.com/r/genzouw/docker_hub_cli)

## Description

Using this container, you can save and manage the [Docker Hub](https://hub.docker.com/) API token and create a repository from the command line.

*Please contact me anytime if you have a problem or request! My information is posted at the bottom of this document.*

## Requirements

* [Docker](https://www.docker.com/)

## Installation

**You do not need to install !**

## Usage

authenticate by running with **DOCKER_HUB_USERNAME** and **DOCKER_HUB_PASSWORD** ENVIRONMENT VARIABLES:

```bash
# Authentication settings to use API TOKEN
$ docker run -it \
  -e DOCKER_HUB_USERNAME \
  -e DOCKER_HUB_PASSWORD \
  --name docker_hub_cli-config genzouw/docker_hub_cli login

# IF environment variables is undefined, you use a follow command.
$ docker run -it \
  -e DOCKER_HUB_USERNAME=your_name \
  -e DOCKER_HUB_PASSWORD=your_password \
  --name docker_hub_cli-config genzouw/docker_hub_cli login
```

Once you authenticate successfully, credentials are preserved in the volume of the **docker_hub_cli-config** container.

To create Docker Hub repository using these credentials, run the container with --volumes-from:

```bash
$ docker run --rm --volumes-from docker_hub_cli-config genzouw/docker_hub_api create_repository myrepo
https://hub.docker.com/repository/docker/genzouw/myrepo
```

**I recommend that you set the following alias in `~/.*rc`.**

```bash
$ alias td='docker run --rm --volumes-from docker_hub_cli-config genzouw/docker_hub_api'
```

## License

This software is released under the MIT License, see LICENSE.


## Contribution


## Help

Got a question ?

File a [Github issue](https://github.com/genzouw/<`1`>/issues), send an email to [genzouw@gmail.com](mailto:genzouw@gmail.com) or tweet to [@genzouw](https://twitter.com/genzouw) on Twitter.

## Author Information

[genzouw](https://genzouw.com)

* Twitter   : @genzouw ( https://twitter.com/genzouw )
* Facebook  : genzouw ( https://www.facebook.com/genzouw )
* LinkedIn  : genzouw ( https://www.linkedin.com/in/genzouw/ )
* Gmail     : genzouw@gmail.com
