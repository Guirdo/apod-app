# APOD App

![apod-app](https://socialify.git.ci/Guirdo/apod-app/image?description=1&font=Raleway&language=1&name=1&owner=1&pattern=Charlie%20Brown&stargazers=1&theme=Dark)

This app is a nice front-end app for the Astronomical Picture Of the Day API from Nasa.

## Table of content
- [Demo](#demo)
- [Tech stack](#tech-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [Resources](#resources)

## Demo

- Home page

![screenshot-apod-app-guirdo vercel app-2022 12 19-21_09_27](https://user-images.githubusercontent.com/21044700/208572573-ffc7a4cd-6b4c-4658-b799-2b5e5682f18a.png)

- Random picture

![screenshot-apod-app-guirdo vercel app-2022 12 19-21_10_45](https://user-images.githubusercontent.com/21044700/208572711-aef8589b-f807-4325-a230-f5d7fb8d785a.png)



## Tech stack

- HTML used for organizing the content 
- SASS powers the project styles
- JavaScript used for logical and interaction requirements
- ReactJS powers the component architecture of the project

## Requirements
- Node.js 18+
- Vite 3.2+
- You will need to generate an API Key in [NASA Open APIs](https://api.nasa.gov/#signUp). Sign up and save your API Key.

## Installation

1. Clone this repository

```
git clone https://github.com/Guirdo/apod-app.git
```

2. Install the dependencies

```
cd apod-app
npm install
```

3. Create the ```.env``` file where you will set the API Key variable:

```
VITE_API_KEY=<your-api-key>
```

4. Run the local environment

```
npm run dev
```
## Code organization
* ```.husky/```: husky configuration for git hooks.
* ```components/```: react components.
* ```helper/```: functions that help to do simple tasks.
* ```hooks/```: custom react hooks.
* ```src/```: source folder.
* ```stores/```: stores for the state-management.
* ```style/```: styles of the project.

## Resources
- Check the documentation of this API for more details: [nasa/apod-api](https://github.com/nasa/apod-api)
