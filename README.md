# Atllas Software Engineering Take-Home Exercise

🌟 Welcome to the Atllas take-home coding exercise! 🌟

This full-stack exercise involves building a form component in React that also makes a request to the Node.js/Express.js backend. We imagine you should spend around _four hours at minimum_ to implement this feature, but want to emphasize that there is no specific deadline, or ticking clock for the implementation time. You can feel free to break the work up over multiple days. The entire point of this exercise is to get a good sense of how you build software.

Also, please keep in mind that you are not specifically limited to four hours. If you want to spend more time than that, using this as an opportunity to learn a new library or technology, or just generally making it more awesome, you are of course free to do so.

## Getting Set Up

The exercise requires [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) to be installed. We recommend using at least Node v14.

1. Start by downloading this project.

1. Initialize the git repository, run `git init` to do so.

1. In the root directory, run `npm install` to gather all dependencies.

1. Next, `npm run seed` will seed the local SQLite database. **Warning: This will drop the database if it exists**. The database lives in a local file `database.sqlite3`.

1. Then run `npm start` which should start both the server and the React client.

**⚠️PLEASE MAKE SURE THAT YOU INSTALL GIT AND COMMIT ALL CHANGES ON TO MASTER⚠️**

## Technical Notes

- The server is running with [nodemon](https://nodemon.io/) which will automatically restart for you when you modify and save a file.
- The frontend was bootstrapped with [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- The database provider is SQLite, which will store data in a file local to your repository called `database.sqlite3`. The ORM [Sequelize](http://docs.sequelizejs.com/) is on top of it. You should only have to interact with Sequelize.
- The API client we have set up for you is [axios](https://github.com/axios/axios). You are welcome to swap this out for your favorite client if you prefer.
- The server is running on port 3001 and all AJAX requests from the frontend will automatically proxy to that endpoint. For instance, you can `axios.get('/agents')` and it will automatically hit `localhost:3001/agents`.
- We have a linter installed but we understand you can't catch them all however, if you are able to minimize the number of linting errors that would be fantastic! Feel free to implement your own linting style if you wish.
- We provided you with some basic styling for the agents, feel free to change this to reflect the acceptance criteria and make it more appealing.
- Design the web application to be able a production amount of information.

## Acceptance Criteria

### User Stories

1. Clicking the 'Join the team!' button displays a form allowing me to fill out all of the agent's information as per the data model (see `server/model.js`).

1. Filling out the form will create a new agent in the database that persists on reload.

1. I can see a list for all the agents that are in the database.

1. The website is styled appropriately for perspective users to find an agent.

1. I can search by the Agents practice areas and have the page dynamically update.

1. I want to click on an Agents card in the list and be able to see more in-depth information about them.

1. When viewing the enhanced view of the agents card I want to see reviews for that agent.

1. Be able to give a persistent review on the agents card.

## Going Above and Beyond the Requirements

Given the time expectations of this exercise, we don't expect anyone to submit anything super fancy, but if you find yourself with extra time, any extra credit item(s) that showcase your unique strengths would be awesome! 🙌

## Submitting the Assignment

When you have finished the assignment, create a bundle of your work by running `npm run bundle` in the repo root.

This generates a bundle file called `atllas-take-home-exercise` based on your local master branch. Return that file to us via e-mail, and we'll review your code within 1-2 days.

Thank you and good luck! 🙏
