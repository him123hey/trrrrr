
// --------------------------------------------------
// PART 1 : CREATE THE PROJECT
// --------------------------------------------------

// 1- Make you project a NPM project
// run command npm init

// 2- Install NPM axios package 
// npm install axios
// 3 -Require thie package in your main.js
let axios = require("axios");
let chalk = require("chalk");
// 4- Send a get request to this endpoint : 'https://random-words-api.vercel.app/word'
//		and print the result of the request in the console
const URL = "https://random-words-api.vercel.app/word";
axios.get(URL).then((respone) => {
    console.log(chalk.red(respone.data[0].definition));
})
// 5 - Install NPM chalk package 
// 		 Change the display in the console as you want using chalk 
//		 https://www.npmjs.com/package/chalk


// 7 Run it : it should work

// --------------------------------------------------
// PART 2 : PUSH.. BUT NOT ALL
// --------------------------------------------------

// 1- Create a new GITHUB repository and close it

// 2- Put the previous code on it

// 3- Create a file  .gitignore file:
//			It should contain the line: 
//			/node_modules 

// 4- Commit and push
//		Check the /node_modules folder is NOT on gitHub

// 5- Clone your project again (new folder)

// 6- INstall the NPM dependancies

// 7 Run it : it should work and you should have the /node_modules created


//git command git init->git remote add origin URL-> git add . -> git commit -m "Message" -> git push origin master