Overview : This is a simple web application that allows users to fetch jokes from the JokeAPI based on their preferences. Users can select joke categories, specify languages, apply blacklist flags to exclude certain types of jokes, and choose the number of jokes to fetch. The app is built with Node.js, Express, Axios, and EJS for templating.
Features:  Fetch jokes by category (e.g., Programming, Dark, Pun, etc.)
Select the language of the jokes (default is English)
Apply blacklist flags to filter out specific types of jokes (e.g., NSFW, religious, political, etc.)
Choose the format of the response (JSON, XML, YAML)
Fetch multiple jokes at once (up to 10)
Responsive and user-friendly UI

Prerequisites
Node.js and npm installed on your machine.

Project Setup:
1. Clone the Repository
2. Install Dependencies  Install the necessary Node.js packages:  npm i
3. Start the Server : node index.js
4. Access the Application   Once the server is running, open your browser and navigate to:  http://localhost:3000

Usage:
Fetching a Joke
Choose a Category: Select the category of jokes you want to fetch. Default is "Any".
Select Language: Choose the language for the jokes. English is the default.
Blacklist Flags: Check any flags to exclude jokes of specific types (e.g., NSFW, political).
Number of Jokes: Specify the number of jokes to fetch (1-10).
Submit: Click the "Get Joke" button to fetch and display the jokes.


Error Handling
If the API request fails or no jokes are found, an error message will be displayed instead of the joke.
The server logs errors to the console for debugging purposes.

API Reference
This app uses the JokeAPI to fetch jokes. The API provides various options to filter and customize the jokes returned based on user input.

