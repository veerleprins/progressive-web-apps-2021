## HorrorInfo:

<img width="800" alt="Mockup on Apple computer with screenshot of the application." src="https://user-images.githubusercontent.com/35265583/109638652-8db44800-7b4e-11eb-9b61-b6a4aa04974d.png">

## :black_nib: Short Description

For the _Progressive web Apps_ course within the Minor Web Design & Development ([@cmda-minor-web](https://github.com/cmda-minor-web)) we learn about building server side rendering applications.

This repository shows a web application about movies with the API from [The Movie DB](https://www.themoviedb.org/). It is not necessary to have an account to view this application.

## Table of contents:

- [Feature](#small_orange_diamond-feature)
- [API](#link-api)
- [Packages](#file_folder-packages)
- [Install](#arrow_down-install)
- [Deploy](#globe_with_meridians-deploy)
- [Future features](#small_blue_diamond-future-features)
- [Sources](#books-sources)

## :small_orange_diamond: Features

With **Horror Info** you can find information about a specific horror movie. There are horror movies to discover, but you can also search for a horror movie using the search bar. You can also see the number of votings, which is the average, but especially very important: Where you can watch this film in corona time.

### Scripts

To ensure that a developer does not always have to view or check all his code himself before building a website, there are NPM packages that can be installed and used for build scripts. These NPM packages can, for example, minify certain files, link multiple files together or monitor whether a file has changed.

#### Start scripts

The start script ensures that everyone can view my project (developer or not) when he or she downloads this repo.

`prestart` - This script is still executed before someone executes the script. Hence 'pre-script. With this script, the script npm run build is first called so that the dist folder is built.

`start` - This script can be called by a non-developer to view the website locally. This script starts up a local server on the given port.

#### Build scripts

In my project I use a number of build scripts to build my dist map, minify my CSS & JS and link multiple files together.

`build` - My build script automates four other build scripts (build:static, build:static:img, build:static:css & build:static:js). Namely building my static files.

`build:static` - My build:static really just takes the manifest and service worker files and copies them to the 'dist' folder.

`build:static:img`- Since I want to maintain a certain structure in my dist folder, I have written a separate build script for my images. This script only moves the images in the correct folder within the dist folder.

`build:static:css` - My build:static:css script ensures that all my separate CSS files are linked together, the code is minified and stored in the folder styles within my dist folder.

`build:static:js` - My build script build:static:js ensures that my separate javascript files are merged, the code is minified and these are stored in the folder js within the dist folder.

#### Watch scripts

In my project a watcher is used. This ensures that you as a developer do not have to keep an eye on whether a file has been modified or not. This is done automatically.

`watch` - My watch script watch, uses the chokidar package to monitor all my static files for changes. When a change takes place, this script calls the other build script again.

#### Dev scripts

Finally, it is of course useful for the developer to have a script that keeps an eye on the server files.

`dev` - This script uses the npm package nodemon, which ensures that all server files are monitored and updated when these files also change.

### Manifest & Service Worker

The aim of this project was to learn how to turn a website into a progressive web application. For example, it was of course the intention that this website can be seen as a real web application and that you can also view it offline. This is possible with a manifest and service worker.

#### Manifest

The `manifest.json` is a file necessary for a Progressive web application. This file provides information to the browser in which a description is given of the progressive web application.

#### Service Worker

The `service-worker.js` is a 'javascript' file that is run on a separate thread. I have put the 'javascript' in quotation marks because it works slightly differently than normal javascript files on the client. This separate thread is not connected to the browser itself (so it has no access to the DOM either) and actually runs in the background of the application.

There are a number of life-cycle events that are performed in the service worker. The most important are: **install event** and **activate event**.In addition, there are other events such as checking fetch requests from and to the server, push notifications from a server to the browser, etc.

**Install event**
If a service worker can be used in the browser, the install event is the first event to occur. The service worker is installed here. This is also a good time to cache all pages that should also be accessible without internet.

**Activate event**
When the service worker is installed, it listens to new events, as it were. This is possible through the active event. For example, the old caches are removed first when a newer version of the service worker is installed.

**Fetch event**
In my project I also used the fetch event. This therefore checks all requests made by the browser (retrieving stylesheets, pages, etc.). This also checks if the page is already available in the cache & each visited page is dynamically stored in the cache. This ensures that if the network were to drop, certain pages would still be visible to the user. But when a page is not in the cache, this also ensures that an offline page can be displayed.

### Performance

To ensure that the application runs as fast as possible and is optimally optimized, it is important to make the optimization as good as possible. At the beginning, the performance of this web application was not that high in Lighthouse. The performance and how to improve this had not yet been considered. Looks like there is clearly room for some improvement:
![Screenshot performance before](https://user-images.githubusercontent.com/35265583/113120625-15ef4100-9212-11eb-81f5-d47628d1054a.jpeg) ![Screenshot loading time before](https://user-images.githubusercontent.com/35265583/113123989-5a301080-9215-11eb-8eab-848565c114ac.jpeg)

The performance was 82 out of 100. In addition, a number of other points were also not quite right: best practices can still be improved and the PWA check itself was not entirely correct.

First I added the build scripts which, using the NPM package gulp, pasted the client side js and CSS files together and minified them. This has already resulted in an improvement in optimization.

I also used the NPM compression package to compress all files. This ensures that the files are also reduced again and the optimization improved. Unfortunately the images from my database are already very small. This made it a bit pointless for me to downsize it. The optimization concerns the images are already as good as possible. I did give the images the fixed height and width, which also ensured better performance.

![Screenshot performance after](https://user-images.githubusercontent.com/35265583/113124098-7633b200-9215-11eb-90fc-4d39cbcaaeea.png)
![Screenshot loading time after](https://user-images.githubusercontent.com/35265583/113124056-6caa4a00-9215-11eb-932e-187f273f16ed.png)

## :link: API

The API that was used is the API supplied by The Movie DB. These are public APIs and can be found at the link below:

https://developers.themoviedb.org/3/

This has been my 'standard' endpoint to which several parameters have been added to retrieve the data. The parameters below were used to obtain the various information:

- `discover/movie`
- `movie/${movieID}`
- `movie/${movieID}/recommendations`
- `movie/${movieID}/watch/providers`
- `search/movie`

Based on these parameters, it can be seen that I show discovery movies, a specific movie, recommended movies based on a specific movie, the places where this specific movie can be viewed and the user can search for movies.

## :file_folder: Packages

There are a number of packages that have been downloaded for creating this application.

### Dev Dependencies

#### nodemon

The package [**nodemon**](https://www.npmjs.com/package/nodemon) is installed in the developer dependencies. Nodemon is a tool to ensure that the server is automatically restarted after changes have been made to one of the files. It helps the developer, among other things, by keeping an eye on whether there are changes that could cause possible bugs.

#### gulp

The package [**gulp**](https://www.npmjs.com/package/gulp) is a kind of toolkit with which various tasks can be performed automatically. The reason this package has been downloaded is because it helps perform various tasks (using the `.pipe()` that is built in) and is a simple but straightforward package.

#### gulp-concat

The [**gulp-concat**](https://www.npmjs.com/package/gulp-concat) package merges several files and saves them in a new file. The reason why this package has been downloaded is because different files can be created in this way (such as different CSS files) and then link them together again.

#### gulp-clean-css

The package [**gulp-clean-css**](https://www.npmjs.com/package/gulp-clean-css) ensures that the CSS code is minified. The reason why this package is installed is to be able to minify the CSS.

#### gulp-uglify

The package [**gulp-uglify**](https://www.npmjs.com/package/gulp-uglify) actually works the same as the package gulp-css-clean, but for javascript files. The reason this package is installed is to minify the javascript file.

### Dependencies

#### express

The [**express**](https://www.npmjs.com/package/express) package is a framework for Nodejs. The reason why this package was downloaded is because express makes it easier to start a routing via the server. In addition, it supports many template engines that make it easier for this project.

#### ejs

The template engine [**ejs**](https://www.npmjs.com/package/ejs) ensures that javascript code can be injected on the client. The reason this package was downloaded is because ejs makes it easier to inject the data sent from the server into the client.

#### express-ejs-layouts

The package [**express-ejs-layouts**](https://www.npmjs.com/package/express-ejs-layouts) is a layout for ejs that works with express. The reason why this package has been downloaded is because it does not create any open tags in the .ejs files at, for example, the body and html tag when coding in the DRY (**D**on't **R**epeat **Y**ourself) way.

#### dotenv

The package [**dotenv**](https://www.npmjs.com/package/dotenv) is a kind of module that ensures that variables are released from an .env file. The reason this package was downloaded is because dotenv helps to store sensitive data (keys of an API), among other things, without it being visible to everyone when the GitHub repo is downloaded.

#### body-parser

The package [**body-parser**](https://www.npmjs.com/package/body-parser) ensures that the incoming requests can be read in Nodejs under the `req.body`. The reason why this package was downloaded is because it allows the input from the search bar to be read.

#### node-fetch

The package [**node-fetch**](https://www.npmjs.com/package/node-fetch) is a module that actually works exactly like the window.fetch method on the client, but for the server side. The reason why this package was downloaded is because it allowed an API fetch to be made via the server side.

## :arrow_down: Install

### 1. Install npm :computer:

Before getting started, you need to install nvm. nvm can be installed by typing the following line of code in terminal and pressing enter:

`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh `

If nvm has been successfully installed, you can check the version by typing the following line of code in the terminal and pressing enter:

`nvm --version`

### 2. :open_file_folder: Clone folder

Then you need to download this project and open it with your code editor. To do this, open your terminal with the correct path in which you want this repository. **Example**:

`cd/Desktop/Repos`

Then type the following line of code into your terminal:

`git clone https://github.com/veerleprins/progressive-web-apps-2021.git`

With this line of code, you've successfully downloaded the repository to your desired location.

### 3. Install all the packages :bookmark_tabs:

Then type the code below into your terminal:

`npm i`

With this line of code, you download all the packages you need for this repo.

### 4. :white_check_mark: Start and run the code

Go to the repository in the terminal and add the following line of code below:

` npm run dev`

Now you can open http://localhost:<PORT>/ in your browser (with the port that is being given) to view the web application! :raised_hands:

## :globe_with_meridians: Deploy

My web application can be found at the link below:

https://horror-info.herokuapp.com/

## :small_blue_diamond: Future features

As a future vision I would like to expand this application so that the user can create his own profile and save movies in lists. I would also like to add that the user can filter for films based on actors who may or may not play in the movie.

## :books: Sources

The sources I've used to create this web application:

### Packages:

- nodemon (2.0.7). (2021). [Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.]. npmjs. https://www.npmjs.com/package/nodemon
- express (4.17.1). (2019). [Fast, unopinionated, minimalist web framework for node.]. npmjs. https://www.npmjs.com/package/express
- ejs (3.1.6). (2021). [Embedded JavaScript template ejs.]. npmjs. https://www.npmjs.com/package/ejs
- express-ejs-layouts (2.5.0). (2018). [Layout support for ejs in express.]. npmjs. https://www.npmjs.com/package/express-ejs-layouts
- body-parser (1.19.0). (2019). [Parse incoming request bodies in a middleware before your handlers, available under the req.body property.]. npmjs. https://www.npmjs.com/package/body-parser
- dotenv (8.2.0). (2020). [Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.]. npmjs. https://www.npmjs.com/package/dotenv
- node-fetch (2.6.1). (2021). [A light-weight module that brings window.fetch to Node.js]. npmjs. https://www.npmjs.com/package/node-fetch
- gulp (4.0.2). (2019). [Gulp is a toolkit that helps you automate painful or time-consuming tasks in your development workflow.]. npmjs. https://www.npmjs.com/package/gulp
- gulp-concat (2.6.1). (2017). [Concatenates files.]. npmjs. https://www.npmjs.com/package/gulp-concat
- gulp-clean-css (4.3.0). (2020). [Gulp plugin to minify CSS.]. npmjs. https://www.npmjs.com/package/gulp-clean-css
- gulp-uglify (3.0.2). (2019). [Minify JavaScript files.]. npmjs. https://www.npmjs.com/package/gulp-uglify
- K. (z.d.). kimmobrunfeldt/chokidar-cli. GitHub. Geraadpleegd op 26 maart 2021, van https://github.com/kimmobrunfeldt/chokidar-cli
- compression (1.7.4). (2019). [Compress files]. npmjs. https://www.npmjs.com/package/compression

### Code:

- Unknown, E. [Elias]. (2019, 25 november). Fetch multiple URLs at the same time? [StackOverflow Post]. Stack Overflow. https://stackoverflow.com/questions/59037553/fetch-multiple-urls-at-the-same-time
- Unknown, A. (2020, 16 december). How to get the keys of a JavaScript object. techtutorialsx. https://techtutorialsx.com/2020/05/23/javascript-getting-keys-of-object/
- Dayıbaşı, O. (2020, 1 february). How to Hide Scrollbar and Visible Only Scrolling - Frontend Development With JS. Medium. https://medium.com/frontend-development-with-js/how-to-hide-scrollbar-and-visible-only-scrolling-79cc3472e503
- Salvadó, C. C. [christian-c-salvadó]. (2011, 22 augustus). Javascript Regular Expression Remove Spaces [Stack Overflow post]. Stack Overflow. https://stackoverflow.com/questions/7151159/javascript-regular-expression-remove-spaces
- Shah, A. (2020, 6 june). How to remove duplicates from an array in JavaScript. Atta-Ur-Rehman Shah. https://attacomsian.com/blog/javascript-remove-duplicates-from-array
- Andy, J. [jandy]. (2015, 19 february). Removing undefined values from Array [Stack Overflow post]. Stack Overflow. https://stackoverflow.com/questions/28607451/removing-undefined-values-from-array
- Pavlutin, D. (2020, 11 augustus). How to Access Object’s Keys, Values, and Entries in JavaScript. Dmitri Pavlutin Blog. https://dmitripavlutin.com/access-object-keys-values-entries/
- Aziz, [Aziz]. (2016, 12 september). How to use es6 import for images [Stack Overflow post]. Stack Overflow. https://stackoverflow.com/questions/39458511/how-to-use-es6-import-for-images
- MDN. (z.d.). Array.prototype.sort() - JavaScript | MDN. MDN Web Docs. Geraadpleegd op 30 november 2020, van https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
- Wayne, A. [alex-wayne]. (2015, 2 june). Return only numbers from string [StackOverflow Post]. Stack Overflow. https://stackoverflow.com/questions/30607419/return-only-numbers-from-string
- Steve Griffith. (2020, 22 januari). How to Export and Require Modules in NodeJS [Video]. YouTube. https://www.youtube.com/watch?v=pP4kjXykbio
- nodejs (14.16.0). (2020). [Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine.]. Nodejs. https://nodejs.org/en/
- freeCodeCamp.org. (2018, 24 juli). Gulp Task Automation for Beginners [Video]. YouTube. https://www.youtube.com/watch?v=LYbt50dhTko&t=352s&ab_channel=freeCodeCamp.org
- How to force HTTPS with Express.js - Developer Handbook Documentation. (z.d.). docs divio. Geraadpleegd op 28 maart 2021, van https://docs.divio.com/en/latest/how-to/node-express-force-https/
- Almasi, F. (2020, 9 september). 10 Critical Performance Optimization Steps You Should Take. Medium. https://betterprogramming.pub/10-critical-performance-optimization-steps-you-should-take-b560a3fcf658
- RaddyTheBrand. (2020, 20 augustus). Node.js Express EJS Layouts and Partials Tutorial [Video]. YouTube. https://www.youtube.com/watch?v=lYVKbAn5Od0

### Service worker:

- Google, Microsoft, & Awwwards. (z.d.). Progressive Web Apps The future of Mobile Web - Awwwards. Progressive Web Apps The future of the Mobile Web. Geraadpleegd op 16 maart 2021, van https://www.awwwards.com/PWA-ebook/en
- Google, & Gaunt, M. (2020, 24 juli). Service Workers: an Introduction | Web Fundamentals. Google Developers. https://developers.google.com/web/fundamentals/primers/service-workers/
- The Net Ninja. (2019, 6 mei). PWA Tutorial for Beginners #1 - What Are PWA’s? [Video]. YouTube. https://www.youtube.com/watch?v=4XT23X0Fjfk&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=1&ab_channel=TheNetNinja
- Add a web app manifest. (z.d.). Web.Dev. Geraadpleegd op 24 maart 2021, van https://web.dev/add-manifest/
- Posnick, J. (z.d.). Service Worker Registration | Web Fundamentals |. Google Developers. Geraadpleegd op 26 maart 2021, van https://developers.google.com/web/fundamentals/primers/service-workers/registration

### Illustrations:

- Seeklogo. (z.d.). [Illustrations]. Seek Logo. https://seeklogo.com/

## :lock: License

This repo is licensed as [MIT](https://github.com/veerleprins/progressive-web-apps-2021/blob/master/LICENSE) by :copyright: [Veerle Prins](https://github.com/veerleprins), 2020
