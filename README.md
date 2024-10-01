BOOK STORE - WEB APPLICATION
This project is a fully functional Book Store web application built using Java Spring Boot for the backend and React.js for the frontend. 
The application allows users to browse books, filter them by genre, view details, add books to their cart, and purchase them.


Features
.Browse by Genre: Users can filter books based on genre using a dropdown menu.
.Book Details: Each book displays detailed information including title, author, price, and category.
.Add to Cart: Users can add multiple books to their cart for purchase.
.Responsive UI: The frontend is built using Bootstrap for responsive design and user-friendly navigation.
.Book API Integration: Fetches book data using the Google Books API to display a wide variety of books.


Tech Stack

Backend
.Java Spring Boot: The backend is developed using Java Spring Boot for managing the book data and user interactions.
.Spring MVC: For handling REST API requests.
.Spring Data JPA: For managing database operations.
.MySQL: For persisting book and user data in a relational database.

Frontend
.React.js: The frontend is developed using React for a dynamic, interactive user experience.
.React Bootstrap: For the layout and styling of components.
.Fetch API: Used for communicating with the backend and the Google Books API.

Database
.MySQL: The project uses MySQL as the primary database to store user information, book details, and transaction records.

APIs
.Google Books API: Integrated with the Google Books API to fetch a collection of books and their details.


Installation and Setup
Follow the instructions below to set up the project locally:

Prerequisites
.Node.js and npm: For running the frontend.
.Maven: For building and running the Spring Boot backend.
.MySQL: Database setup.

Steps

1.Clone the repository:
git clone https://github.com/CuneytBaskurt/Book-Store.git

2.Backend Setup:
.Navigate to the backend folder and install dependencies:
cd backend
mvn clean install
.Configure your MySQL connection in the application.properties file.
.Run the Spring Boot application:

3.Frontend Setup:
.Navigate to the frontend folder and install the required packages:
cd frontend
npm install
.Start the React development server:
npm start

4.Database Setup:
.Create a MySQL database and update the connection URL in application.properties.
.Run the necessary migrations to create tables for books and users.

Usage
Backend API Endpoints
.GET /fetch-books: Fetches books from Google Books API and stores them in the database.
.GET /books: Retrieves all books from the database.
.GET /books/{genre}: Retrieves books filtered by genre.

Frontend
.The React frontend communicates with the backend via Fetch API to display book details and manage user actions.


Project Structure
Book-Store/
│
├── backend/                # Java Spring Boot backend
│   ├── src/main/java/       # Java source code
│   ├── src/main/resources/  # Configuration files
│   ├── pom.xml              # Maven dependencies
│
├── frontend/               # React.js frontend
│   ├── public/             # Public assets (HTML, images)
│   ├── src/                # React components and logic
│   ├── package.json        # Frontend dependencies
│
└── README.md               # Project documentation






