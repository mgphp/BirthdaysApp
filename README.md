# Birthday app
I have built this app with React Webpack 2.0 babel kit with, babel, es2015 and sass. I have 
used Jest and Enzyme for testing. 

##Installation

```bash
    $ npm install
```

##Usage

To build on development mode, generates a minified version with source map.

```bash
    $ npm run build:dev
```

To build on production mode

```bash
    $ npm run build
```

To use webpack dev server & watch,

```bash
    $ npm start
```

Listens at **http://localhost:8080**

## Technical Choices
```bash
  I have created 7 components and the appropriate tests to go with
  each component.
  
  5 of these components are then imported into the main.js file.
  
  I have also included additional features specified. The search box and the
  annotations. 
  
  The birthday list is sorted by Age.
  
  The search box component returns a filtered list of birthdays even new birthdays that
  have been added by the form. (I may have misintrepreted this though as I think 
  it may have to filter the birthday list and not return search results, apologies if so). 
  
  I have written a number of unit tests that test the individual components. If I had more 
  time I would make these more robust, I would also write tests for my util functions. But I just 
  wanted to demonstrate the use of unit test and to concentrate on the UI and the app.
  
  For the UI I am using a mobile first approach and tried immitate something that resembles
  a control panel. I have styled the components with flexbox and without the use of a framework.
  
```
