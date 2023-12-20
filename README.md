# E-commerce
The purpose of this challenge was to create a command-line application in node using the mysql2 and sequelize packages. This program was designed to allow users to build an ecommerce application so as to understand their architecture. The application uses mysql2, and sequelize to query the database and make dynamic changes to the database based on api calls made using Express.

The acceptance criteria were as follows: 
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

This challenge utilized the node environment to create a program using dynamic Javascript. There were helpful error messages in the terminal to direct progress. The MySQL2 and Sequelize documentation were referenced throughout the project. There were hurdles building the correct route for each case. I had to rely on logs to identify where problems occurred. Problems pertaining to the router.put calls to update a record persisted. I will have to revisit this at a later date. Communicating between the db and api routes using Insomnia was not second nature. I realized how important it is to maintain consistencies between like routers in their various folders, so that they have similar statuses and messages - it made debugging easier. Previous eureka moments were just as valuable here - reformatting code, implementing clear naming convention, and notating often.  I am still working to make this a natural part of the build process. 

## Usage

The js file can be used to understand the dynamic code that supports the application. Here is a link to the application walkthrough for your reference: https://drive.google.com/file/d/1hJqcBk89tnjuVrL4kxIKISwbPCzQj3lJ/view

## Credits
The project was completed with help from the course materials and assistance from Bootcamp tutor, Erik Hirsch.

## License

MIT License
Copyright (c) [2023] [Amber Watson]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module.
