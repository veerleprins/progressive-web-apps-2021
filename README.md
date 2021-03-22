## HorrorInfo:

<img width="800" alt="Mockup on Apple computer with screenshot of the application." src="https://user-images.githubusercontent.com/35265583/109638652-8db44800-7b4e-11eb-9b61-b6a4aa04974d.png">
<!-- MockUp from Figma Plugin -->

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

## :small_orange_diamond: Feature

With **Horror Info** you can find information about a specific horror movie. There are horror movies to discover, but you can also search for a horror movie using the search bar. You can also see the number of votings, which is the average, but especially very important: Where you can watch this film in corona time.

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

Het pakketje [**body-parser**](https://www.npmjs.com/package/body-parser) zorgt er voor dat de inkomende aanvragen uitgelezen kunnen worden in Nodejs onder de `req.body`. The reason why this package was downloaded is because it allows the input from the search bar to be read.

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

### Service worker:

- Google, Microsoft, & Awwwards. (z.d.). Progressive Web Apps The future of Mobile Web - Awwwards. Progressive Web Apps The future of the Mobile Web. Geraadpleegd op 16 maart 2021, van https://www.awwwards.com/PWA-ebook/en
- Google, & Gaunt, M. (2020, 24 juli). Service Workers: an Introduction | Web Fundamentals. Google Developers. https://developers.google.com/web/fundamentals/primers/service-workers/
- The Net Ninja. (2019, 6 mei). PWA Tutorial for Beginners #1 - What Are PWA’s? [Video]. YouTube. https://www.youtube.com/watch?v=4XT23X0Fjfk&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=1&ab_channel=TheNetNinja

### Illustrations:

- Seeklogo. (z.d.). [Illustrations]. Seek Logo. https://seeklogo.com/

## :lock: License

This repo is licensed as [MIT](https://github.com/veerleprins/progressive-web-apps-2021/blob/master/LICENSE) by :copyright: [Veerle Prins](https://github.com/veerleprins), 2020

<!-- Resources
https://www.youtube.com/watch?v=zW_tZR0Ir3Q&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=12&ab_channel=TheNetNinja
https://stackoverflow.com/questions/12160668/how-to-get-the-id-from-the-url-while-using-node-js/12161020#12161020
https://www.youtube.com/watch?v=lYVKbAn5Od0
https://stackoverflow.com/questions/49539306/firefox-service-worker-securityerror-domexception-the-operation-is-insecure
https://developers.google.com/web/fundamentals/primers/service-workers/
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
https://www.youtube.com/watch?v=ksXwaWHCW6k


service worker:
https://web.dev/offline-cookbook/
https://developers.google.com/web/fundamentals/primers/service-workers/registration
https://searchsoftwarequality.techtarget.com/definition/native-application-native-app
https://web.dev/add-manifest/
https://flaviocopes.com/how-to-save-json-object-to-file-nodejs/

 -->
