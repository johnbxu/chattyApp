# ChattyApp

## Description
ChattyApp is a simple, single-page, real time chat app built using ReactJS and websockets.

Connected users are able type text messages, display pictures, change their username, and they are assigned a user random color upon connection.

Users may also see notifications when other users connect or disconnect, and can see a list of users currently connected.

## Screenshots

![screenshot of a chat session](https://github.com/johnbxu/chattyApp/blob/master/docs/chatty_screenshot_1.png)
![screenshot of users disconnecting and connecting](https://github.com/johnbxu/chattyApp/blob/master/docs/chatty_screenshot_2.png)

## Getting Started

1. Clone this repo as well as the repo for the websocket server (https://github.com/johnbxu/chattyAppWebSocketServer)
2. Install all dependencies for both directories (using `npm install`)
3. Run the web server using `node server.js`
4. Run the websocket server using `node server.js`  
5. Connect to localhost:3000 with a browser  

### Dependencies

* Node
* Express
* React
* Webpack
* Uuid
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
