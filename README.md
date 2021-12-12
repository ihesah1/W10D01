<div align="center">
  <h1>Next.js color-mode  </h1>
  <br />
</div>

*Next.js is an open-source React front-end framework that adds additional optimization capabilities like server-side rendering (SSR) and static-site generation. Next.js builds on the React library, meaning Next.js applications take the benefits of React and just adds additional features.*


<div align="center">
  
![ezgif com-gif-maker](https://user-images.githubusercontent.com/92258765/145714266-43c30d6f-5cbb-4c94-a819-cf5b2f11d02a.gif)
</div>

## API 
```
[
    { "name": "yellow", "hex": "#F5DF4D" },
    { "name": " Blue", "hex": "#0f4c81" },
    { "name": "red", "hex": "#FA7268" },
    { "name": " Violet", "hex": "#5f4b8b" },
    { "name": "Green", "hex": "#88b04b" },
    { "name": "Rose ", "hex": "#F7CAC9" },
    { "name": "Marsala", "hex": "#B57170" },
    { "name": "Radiant Orchid", "hex": "#b067a1" }
  ]
  ```
## Install
It's easy to install 

```npm install --save next react react-dom```

```npx create-next-app app```

``` $ cd app```

Then, we'll start the development server 
``` $ npm run dev ```

## Next.js Folder Structures
### 3 folders:-
* pages
* public
* styles
 ```/ other files and folders, .gitignore, package.json, next.config.js...
- pages
  - api
    - hello.js
  - _app.js
  - index.js
- public
  - favicon.ico
  - vercel.svg
- styles
  - globals.css
  - Home.module.css 
```  
## Build
Add a build script

```{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}```
```
## Routing/Navigation 
