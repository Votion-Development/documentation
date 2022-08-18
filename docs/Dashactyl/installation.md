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

# adding MongoDB keys
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -

#If you receive an error indicating that gnupg is not installed, you can:

sudo apt-get install gnupg
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list

sudo apt-get update

# installing MongoDB

sudo apt-get install -y mongodb-org

# starting MongoDB

systemctl start mongod && systemctl enable mongod

# login to mongodb shell

mongosh

# creating MongoDB root user

use admin
db.createUser(
      {
          user: "root",
          pwd: "passwordhere",
          roles: [ "root" ]
      }
)

# installing NPM
sudo apt install npm

# installing NodeJS
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo bash -
sudo apt install nodejs
```

Now, we are going to enable Authentication on your MongoDB database and make it accessible outside your VPS so you can use MongoDB compass with it. This is however optional if you would rather not to expose your Database to the world. This is only recomended for setup and development purposes.

```bash
nano /etc/mongod.conf
```

Now, we are going to replace this:

![127.0.0.1](/img/mongodb_net_127.0.0.1.png)

With this:

![0.0.0.0](/img/mongodb_net_0.0.0.0.png)

And if you scroll down and find security:

![security](/img/mongodb_security.png)

Uncomment it and turn it into this:

![security](/img/mongodb_security_enabled.png)

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
