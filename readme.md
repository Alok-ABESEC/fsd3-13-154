# project setup

1. create two folder frontend and backend.
2. go to frontend 'cd frontend'
  - type `npm create vite@latest`
  - press 'Y' if asked to install
  - enter '.' in project name
  - select 'react' as framework from arrow key
  - select JavaScript from variant
  - select ESLint by arrow key
  - select yes and press enter
3. setup tailwind in react project
  - install tailwind by`npm install tailwindcss @tailwindcss/vite`
  - update vite.config.js as below image
    ![alt text](image-1.png)
  - remove all contents os index.css then write `@import " tailwind"` top of index.css
  - In react style can be added into html by className because class is predefined keyword in react
4. when jsx function return directory html content called component
  - start with capital letter
  - 

