---
sidebar_position: 2
---

# Installation

Before we bein the installation, you must make sure that your OS type supports running NodeJS and MariaDB. These two allow the software to run.

The OSs we will be showing you how to install this on are:

[Ubuntu/Debian](#Ubuntu/Debian)

CentOS (Coming Soon)

**Please be aware that it is required you have a basic understanding of the linux operating system before trying to install Dashactyl.**

# Ubuntu/Debian

First, we will update our apt repository list to make sure everything is up to date on the system and do essential upgrades.

```bash
sudo apt update && sudo apt upgrade
```

Once we have done this, we will install git onto the system so we can pull the Dashactyl repository from github.

```bash
sudo apt install git
```

After this, we can start installing NodeJS which runs Dashactyl.

```bash
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt install nodejs
```

Now we have installed NodeJS, let's check that NPM installed properly aswell.

```bash
npm -v
```

If the command is not valid, run the following command and check `npm -v` again.

```bash
sudo apt install npm
```

Now we have done this, we will add NGINX and Certbot which will allow us to link our domain to dashactyl and make it SSL secure.

```bash
sudo apt install nginx
sudo apt install certbot
sudo apt install -y python3-certbot-nginx
```

Now this has been done, we are able to install the actual Dashactyl files from Github.

```bash
git clone https://github.com/Votion-Development/Dashactyl
```

This will clone the Dashactyl repository into a folder named "Dashactyl". From here we can enter the directory and install the required packages.

```bash
cd Dashactyl && npm install
```

# Settings Configuration

Now it is time to modify Dashactyls settings file. To do this, we need to rename the settings-template.yml to settings.yml.

```bash
mv settings-template.yml settings.yml
```

Now we can start editing the settings file.

```bash
nano settings.yml
```

Once in here, you will see quite a lot of configuration. Most of it is pretty self explanitory.

For the discord section, you will need to create an application at https://discord.dev and enter the required info into the settings.yml file.

The API allows you to trigger actions on the client panel using requests. This is required to be enabled if you are using the Dashactyl Manager bot. (https://dashmanager.votion.dev)

The Packages are what dashactyl use to give to a user. This means if the default package is `test` and test has a Memory limit of 1gb, the user once created on the client area can only create servers up to the 1gb limit. They cannot go over.

# Webserver Configuration

So now we have got to the part where we configure our web server. This will allow us to use a custom Domain name and apply SSL to it.

So lets first install our SSL certificate.

```bash
systemctl start nginx
certbot certonly --nginx -d your.dashactyl.domain
```

If your domain successfully obtained a SSL certificate, your output should look simular to the following:

```
IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/your.dashactyl.domain/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/your.dashactyl.domain/privkey.pem
   Your cert will expire on date. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```

Next you need to go to the NGINX sites-enabled directory and create a configuration file.

```bash
cd /etc/nginx/sites-enabled
nano dashactyl.conf
```

Now paste the following in the file and replace `<domain>` with your dashactyl domain you made the SSL Certificate with. You can also replace `<port>` with the port you set dashactyl to run on.

```conf
server {
    listen 80;
    server_name <domain>;
    return 301 https://$server_name$request_uri;
}
server {
    listen 443 ssl http2;
    
    server_name <domain>;
ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers  HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
location / {
      proxy_pass http://localhost:<port>/;
      proxy_buffering off;
      proxy_set_header X-Real-IP $remote_addr;
  }
}```


Now you can restart NGINX and Dashactyk should be up and running on that domain with SSL!

```bash
systemctl restart nginx
```