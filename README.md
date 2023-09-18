# Portfolio Using React + Vite

## Routes
- `/` 
    - home page
- `/about` 
    - about page - showing skill icons and education
- `/projects` 
    - projects page - list of all the projects


## npm modules
- react-router-dom
- tailwindcss
- scss


## File Structure
-  `public` - all images 
-  `src`
    -  `components` - 
    -  `hooks` - hook for theme swithcer
    -  `pages` - pages describe same as in Routes above
    -  `routes` - set up custom routes using react-router-dom
    -  `styles` - 
    -  `App.jsx` - providing store state the whole app
    - `index.scss` - reset css and set basic style in root
    - `main.jsx` - get root element and render app
    - `mixins.scss` - set up quick responsive design
- `index.html` - root element for single page application
- `.gitignore` - file name that you want push into github
- `tailwind.config.js` - specification and adding colors for tailwind
- `package.json` - list of all dependencies that used in project


## Project Setup
To run project locally
- Clone repo
- `npm install` in root directory to install all depedncies
- `npm run dev` to start project
