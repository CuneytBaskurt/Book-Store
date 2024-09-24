package net.javaguides.book_backend.controller;

import net.javaguides.book_backend.model.Book;
import net.javaguides.book_backend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/fetch-books")
    public String fetchBooks(@RequestParam String apiKey, @RequestParam int maxResults) {
        bookService.fetchAndSaveBooks(apiKey, maxResults);
        return "Books fetched and saved successfully!";
    }
/*
    @GetMapping("/photos")
    public List<Book> getBooks(@RequestParam(required = false) String category) {
        if (category == null || category.isEmpty()) {
            return bookService.getFirstTwentyBooks();
        } else {
            return bookService.getBooksByGenre(category);
        }
    } */

    @GetMapping("/all-photos")
    public List<Book> getAllBooks() {
        return bookService.getAllBooks(); // BookService'deki yeni metodu çağır
    }


}
