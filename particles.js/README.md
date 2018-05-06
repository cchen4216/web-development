# particle.js

Recently, I watched a web-development video on youtube, which is really cool to play with particles on your web page. So I want to learn how it works and implements.

The whole process is quite easy.

1. create a `index.html` file, `js` and `css` folders to keep `style.css` and `js files`, a `asset` folder to keep json file, the particles configuration file. 
2. import `style.css` and `particles.js` in the head of `index.html`.
3. create a canvas div `<div id="particles-js"></div>` and then add the code line `<script src="js/app.js"></script>` which is used to load particles configuration json file.
4. All the frame work is done. Then you fill some codes in `style.css`, `app.js`, and then make any configuration of particles in the `particles.json` file.

`<script src="js/particles.js"></script>` define the *particles* object and their behavior.
`<script src="js/app.js"></script>` is used to load particles configuration file(e.g. particles.json).
The above code line should be appended after the code line `<div id="particles-js"></div>`.

### Little problem
First time, I lauched the index.html in chrome, and got the below error.

> Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.

This is because the javascript code running in webpage cannot load the local resources on the client end (e.g. C://... or file://...). This is forbidden for the security.

Instead, you can lauched the index.html with a live server. So I lauched it again with VScode live server, and it's done.

Before, when I tried to create an offline map webpage, I downloaded all tile pngs from openstreetmap and then load all the tiles locally. In that case, I manually set the `crossOrigin = null` instead of `true` when `addTileLayer`. But in this case, i haven't figured out how to turn off the crossOrigin error with this method.