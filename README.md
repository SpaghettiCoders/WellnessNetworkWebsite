This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


Some code was from the tutorial "The Road to React Through Firebase"
Some bootstrap functionality was used

Deployed page link: https://wellness-network-website.web.app/
Project Features and Screenshots:
Landing Page - 
![land1](https://imgur.com/gallery/2QKhg6b)
![land2](https://imgur.com/gallery/4oJ3ouQ)
![land3](https://imgur.com/gallery/5gdAhmE)
Sign Up - 
![sign up](https://imgur.com/gallery/xcdIcFz)
Sign In - 
![sign in](https://imgur.com/gallery/hAXX5LQ)
Account Page - 
![account manager](https://imgur.com/gallery/I7Fk2ci)
Admin Page Initial View - 
![admin](https://imgur.com/gallery/jjIMBPZ)
Click on load users, load requests to load users or requests
![load users](https://imgur.com/gallery/rBLhvaD)
![load requests](https://imgur.com/gallery/KYhptUn)
Type in a user ID from the list to view more user parameters
![user info](https://imgur.com/gallery/p74UQKO)
Type in a request or file id to delete it
![request delete](https://imgur.com/gallery/Wnn8z9r)
This is the newsletter manager. Fill in required information and submit to either add/delete a newsletter
![newsletter editor](https://imgur.com/gallery/aW1jS21)
How to run:
LOCALLY - download all files, navigate to directory, run from commandline npm install and npm start

FIREBASE - https://firebase.google.com/docs/hosting

How to update Database and Server Connections:
4. Deployment Information
4.1 Description of Deployment
Your app was deployed to the Firebase hosting service
4.2 Deployment Links
URL: https://wellness-network-website.web.app/
Github Repo: https://github.com/SpaghettiCoders/WellnessNetworkWebsite
Web Server Host: Firebase (https://firebase.google.com/)
	Username: cen3031.team5c@gmail.com
	Password: [see final doc]
 API Keys: Firebase: AIzaSyAW6EcHD6NKddCRGs6ynNnkfLh64RIVB9Q
4.3 General Instructions for your deployment
Your web app is deployed through Firebase. See above for the login information. The github branch “master” is the code currently deployed to your website, all experimental/development code is in the other branches, but the only one that is seen is “master”. 

We are using a firebase datasbe, and its URL is https://console.firebase.google.com/u/1/project/wellness-network-website/database/wellness-network-website/data. Currently the capacity is 100 simultaneous connections. So far, none of that is used. The login information is the same as the web server host. You can update this in the firebase.js file found in src->components->Firebase->firebase.js
 

For file storage, we are also using firebase. The file storage URL is https://console.firebase.google.com/u/1/project/wellness-network-website/storage/wellness-network-website.appspot.com/files. The capacity is 1 gigabyte and so far none is used. You can update this in the firebase.js file found in src->components->Firebase->firebase.js
 

Web App
Admin login information
	User: cen3031.team5c@gmail.com
	Pass: [see final doc]

If you want to change the admin password, please login and select “forgot password”. To access the admin console, go to “https://wellness-network-website.web.app/admin”. This can be done by going to the homepage while logged in with your admin account and typing in “/admin” to the end of the URL
