---
sidebar_position: 2
---

# Installation

:::warning READ BEFORE PROCEEDING!
We've spent hours making this documentation. You're supposed to at least have basic linux knowledge, and you're also supposed to understand what commands you're running.
:::

## Supported Operating Systems
|    Name     |   Versions    |
|-------------|---------------|
|   [Ubuntu](#ubuntu-and-debian)    |    >=20.04    |
|   [Debian](#ubuntu-and-debian)    |    >=10       |
|   [Windows](#windows)   |    >=10       |
|   CentOS    |  Coming Soon  |

Suggested VPS hosting: [ColourNodes](https://colournodes.com)

![colournodes image](/img/colournodes.gif)

Before you begin installation, make sure you have NodeJS v14 or above, git CLI, and Node Package Manager (NPM) v7.x or above installed.

## Ubuntu and Debian
Firstly, make sure that you have all the prerequisites above installed (if you do you can skip this part).

```bash
sudo apt update && sudo apt upgrade

# installing git CLI
sudo apt install git

# installing MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -

#If you receive an error indicating that gnupg is not installed, you can:

sudo apt-get install gnupg
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -

# installing NPM
sudo apt install npm

# installing NodeJS
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt install nodejs
```

You can check the versions with the following commands:
```bash
git --version
npm -v
node -v
```

Now to install Dashactyl, its dependencies & build the frontend:
```bash
git clone https://github.com/Votion-Development/Dashactyl-v2.git
cd Dashactyl-v2 && npm install

cd frontend && npm i && npm run build
```

After installing Dashactyl, create the `webconfig.yml` file using the `webconfig-example.yml` file and edit it for your dashboard.
```bash
cd .. && mv webconfig-example.yml webconfig.yml
nano webconfig.yml
```

## Windows
First, make sure you have all the prerequisites listed at the top of the page (if you do you can skip this part).

- Git CLI: https://git-scm.com/download/win
- NPM and NodeJS: https://nodejs.org/en/

You can check the versions with the following commands:
```bat
git --version
npm -v
node -v
```

Now to install Dashactyl, its dependencies & build the frontend:
```bash
git clone https://github.com/Votion-Development/Dashactyl-v2.git
cd Dashactyl-v2 && npm install

cd frontend && npm i && npm run build
```

After installing Dashactyl, create the `webconfig.yml` file using the `webconfig-example.yml` file and edit it for your dashboard.
```bat
type webconfig-example.yml > webconfig.yml
start webconfig.yml
```
