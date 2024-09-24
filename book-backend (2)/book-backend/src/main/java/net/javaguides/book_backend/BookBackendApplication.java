package net.javaguides.book_backend;

import net.javaguides.book_backend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BookBackendApplication implements CommandLineRunner {

	@Autowired
	private BookService bookService;

	public static void main(String[] args) {
		SpringApplication.run(BookBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		String apiKey = "AIzaSyAaY1_cUAdqvt4HWI_lMSTM8SX-EWD3BlQ"; // API anahtarını buraya ekle
		int maxResults = 0; // Toplam sonuç sayısı (40 kitap)

		bookService.fetchAndSaveBooks(apiKey, maxResults);
	}
}
