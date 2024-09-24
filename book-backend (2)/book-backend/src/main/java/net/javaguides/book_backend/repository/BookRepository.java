package net.javaguides.book_backend.repository;

import net.javaguides.book_backend.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {

   // List<Book> findTop20ByOrderByIdAsc();
   // List<Book> findByCategories(String category);
}
