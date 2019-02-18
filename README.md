# su-downloader3-gui

su-downloader3-gui is a front end to the [su-downloader3](https://github.com/fumetsuu/su-downloader3) nodejs download manager. Being built with web technologies, and being served in a browser, the application has some limitations (such as being unable to access the files system from the client side).
The front end is served by a web server (using [express](http://expressjs.com/)) and the user interface consists of widgets that allow the user to add and control downloads by communicating with the server. [socket.io](https://socket.io/) is used to transfer real-time data about the downloads.
This architecture for a purpose of this nature is arguably impractical (a desktop application using electron for example would be much more suitable) as the user must manually type in the save location since browsers do not provide a way to allow the user to select a directory in their file system and send that to the server; nonetheless, the functionality still works as intended.

## Quick Start

This project is not complete.

1. Clone this repo
```sh
git clone https://github.com/fumetsuu/su-downloader3-gui.git
```

2. Install dependencies
```sh
npm install
```

3. Build the front end files
```sh
npm run build
```

4. Start the server
```sh
npm start
```

5. Go to http://localhost:1234/ to test it out.