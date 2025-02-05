Weather App
A simple yet powerful weather application built with React for the frontend and Node.js/Express for the backend. This app allows users to search for real-time weather details by city name using the OpenWeather API. Whether you're a developer looking to understand the integration of React and Express or a weather enthusiast, this project is designed to be both functional and educational.

Features
Real-Time Weather Data: Fetch and display weather details for any city worldwide.

Key Metrics: View temperature, wind speed, and city name in a clean and intuitive interface.

Modern Tech Stack: Built with React.js for the frontend and Node.js/Express.js for the backend.

Stylish UI: Designed with custom CSS for a sleek and responsive user experience.

Environment Configuration: Uses dotenv to securely manage API keys and environment variables.

Technologies Used
Frontend: React.js

Backend: Node.js, Express.js

API: OpenWeather API (for weather data)

Styling: CSS

Environment Management: dotenv

Project Structure:
.
├── FrontEnd/                  # React frontend code
│   ├── public/                # Public files (index.html, favicon, etc.)
│   ├── src/                   # Source code for React components
│   │   ├── components/        # React components (WeatherForm, WeatherDisplay)
│   │   ├── App.js             # Main React component
│   │   └── index.js           # Entry point for React
│   ├── package.json           # Dependencies for React
│   └── .gitignore             # Frontend gitignore
│
├── BackEnd/                   # Node.js backend code
│   ├── controllers/           # Backend logic to handle requests
│   │   └── weatherController.js # Weather data fetching and response formatting
│   ├── routes/                # Routing files for API
│   │   └── weatherRoutes.js   # Define routes for weather-related requests
│   ├── .env                   # Backend environment variables (API keys, port)
│   ├── index.js               # Entry point for Express server
│   ├── package.json           # Dependencies for Node.js and Express
│   └── .gitignore             # Backend gitignore
│
├── .gitignore                 # Git ignore file for both frontend and backend
├── README.md                  # Project documentation
└── package.json               # Main package.json (if needed for global dependencies)

Setup Instructions
Follow these steps to run the project locally:

1. Clone the Repository
git clone https://github.com/Vinayh28/Practice-Weather-App.git
cd Practice-Weather-App
2. Install Dependencies
   
For the Backend:
cd BackEnd
npm install

For the Frontend:
cd FrontEnd
npm install

4. Set Up .env File for Backend
Create a .env file in the BackEnd folder and add your OpenWeather API key and other variables as follows:
env
WEATHER_API=your_api_key_here
PORT=5000
You can obtain your API key by registering on the OpenWeather website.

4. Run the Application
Start the Backend Server:
cd BackEnd
npm start

Start the Frontend Server:
cd FrontEnd
npm start
Once both servers are running, the application will be available at:
Backend: http://localhost:5000
Frontend: http://localhost:3000

How to Use
Open the frontend app in your browser (http://localhost:3000).

Enter the name of a city in the input field.

Click the "Submit" button or press Enter.

The app will fetch weather data from the backend and display the city name, temperature, and wind speed.

Troubleshooting
CORS Error
If you encounter a CORS error while fetching data from the backend, ensure that you've added the cors middleware to the backend:

Install cors:
npm install cors
Update index.js in the backend:
import cors from 'cors';
app.use(cors());
Missing API Key
Ensure that the .env file in the BackEnd folder contains the correct API key:
env
WEATHER_API=your_api_key_here

Contributing
We welcome contributions! Here’s how you can help:
Fork this repository.

Create a new branch for your changes (e.g., feature/your-feature-name).

Make your changes and commit them with a meaningful message.

Push your changes to your forked repository.

Open a pull request to the main branch.

License
This project is licensed under the MIT License. For more details, see the LICENSE file.

Notes
UI Customization: You can modify the UI components in the src/components directory to suit your preferences.

Backend Logic: The weatherController.js file handles fetching weather data from the OpenWeather API and filters relevant information for the frontend.

Edge Cases: Ensure to handle edge cases, such as invalid city names, in both the UI and backend for a seamless user experience.

Enjoy exploring the Weather App! If you have any questions or suggestions, feel free to reach out or open an issue. Happy coding! 🌦️
