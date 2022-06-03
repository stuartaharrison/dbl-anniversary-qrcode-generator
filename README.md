# Dragonball Legends - Anniversary QRCode Generator
Don't have any friends or friends who play the game? Tired of trying to swap screenshots on Reddit & Discord? Well introducing the Web Application for generating QRCodes! Simply grab some Friend Codes from your current friends list and input them into the text fields available. Click generate and then scan each code into the game.

**This version DOES work with the 4th Anniversay event.**

Demo/Online version for those not looking to run their own is available [here.](https://dblegends.harrisonhomenetwork.co.uk/)

## Getting Started
- Download the project to a local machine using Git.
- Open the project folder in the IDE of your choice.
- Run the command `npm install` in the root folder to install the server dependencies.
- Run the command `npm install --prefix client` in the root project folder to install the client app dependencies.
- Run the command `npm start` to start an instance of the express server and also start the react client side app.

### Environment Variables
This web-app has a single environment variable you can change for when developing on your local machine, which is to change the PORT the express server listens on.

- Create a `.env` file in the projects root folder

```
PORT=6969
```

**You should note that the dockerfile uses the port number 6969 when deploying the image container in the docker environment. You must change the dockerfile value if you wish to change what port is exposed in the container.**

## Docker
A docker container is created and available on Dockerhub for those that want to spin up an instance in your local environment. You can run the below command to it up quickly;

`docker run -d -p 6969:6969 --name dblegends -e PORT=6969 stuartaharrison/dbl-annqrcode-gen`

## Licence
This project is released under the GPL-3.0 licence. This means you are free to do what you wish with the code in this project including commercial and distribution. However, disclosed sources and changing the licence is not allowed.

## Disclaimer
Dragonball Legends is a trademark of BNE Entertainment and and no copyright is intended. This web-app was built as a learning tool and in no way has profit been generated from the creation & distribution of this app. If you paid to use this, seek a refund.
