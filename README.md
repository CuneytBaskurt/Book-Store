# Book Store - Web Application

This project is a fully functional **Book Store web application** built using **Java Spring Boot** for the backend and **React.js** for the frontend.  
The application allows users to browse books, filter them by genre, view details, add books to their cart, and purchase them.

---

## Features
- 📚 **Browse by Genre**: Users can filter books based on genre using a dropdown menu.
- 📝 **Book Details**: Displays detailed information including title, author, price, and category.
- 🛒 **Add to Cart**: Users can add multiple books to their cart for purchase.
- 📱 **Responsive UI**: Built using Bootstrap for a user-friendly and responsive design.
- 🔗 **Book API Integration**: Fetches book data from the **Google Books API** for a wide variety of books.

---

## Tech Stack

### Backend
- **Java Spring Boot**: Manages book data and user interactions.
- **Spring MVC**: Handles REST API requests.
- **Spring Data JPA**: Manages database operations.
- **MySQL**: Stores book and user data in a relational database.

### Frontend
- **React.js**: Provides a dynamic, interactive user experience.
- **React Bootstrap**: Used for layout and styling.
- **Fetch API**: Communicates with the backend and Google Books API.

### Database
- **MySQL**: Stores user information, book details, and transaction records.

### APIs
- **Google Books API**: Integrated to fetch a collection of books and their details.

---

## Installation and Setup

Follow the instructions below to set up the project locally:

### Prerequisites
- **Node.js and npm**: For running the frontend.
- **Maven**: For building and running the Spring Boot backend.
- **MySQL**: For database setup.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/CuneytBaskurt/Book-Store.git
   ```

2. **Backend Setup**:
   - Navigate to the backend folder and install dependencies:
     ```bash
     cd backend
     mvn clean install
     ```
   - Configure your MySQL connection in the `application.properties` file.
   - Run the Spring Boot application:
     ```bash
     mvn spring-boot:run
     ```

3. **Frontend Setup**:
   - Navigate to the frontend folder and install the required packages:
     ```bash
     cd frontend
     npm install
     ```
   - Start the React development server:
     ```bash
     npm start
     ```

4. **Database Setup**:
   - Create a MySQL database and update the connection URL in `application.properties`.
   - Run the necessary migrations to create tables for books and users.

---

## Usage

### Backend API Endpoints
- `GET /fetch-books`: Fetches books from Google Books API and stores them in the database.
- `GET /books`: Retrieves all books from the database.
- `GET /books/{genre}`: Retrieves books filtered by genre.

### Frontend
The React frontend communicates with the backend via Fetch API to display book details and manage user actions.

---

## Project Structure

```plaintext
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
```

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.
