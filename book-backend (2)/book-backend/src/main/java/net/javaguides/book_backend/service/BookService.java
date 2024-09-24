package net.javaguides.book_backend.service;

import net.javaguides.book_backend.model.Book;
import net.javaguides.book_backend.repository.BookRepository;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public void fetchAndSaveBooks(String apiKey, int maxResults) {
        try {
            int startIndex = 0;

            // maxResults'ı 40 olarak belirle
            if (maxResults > 40) {
                maxResults = 40; // En fazla 40 kitap çekelim
            }


            //Art-Biography & Autobiography-Cooking-Drama-Fiction-History-Music-Nature-Poetry-Travel
            while (startIndex < maxResults) {
                // Belirli bir kategori ile kitapları çekiyoruz
                String category = ""; // Örneğin, "fiction" kategorisindeki kitapları çekiyoruz
                String urlString = "https://www.googleapis.com/books/v1/volumes?q=subject:" + category + "&key=" + apiKey + "&startIndex=" + startIndex + "&maxResults=10";
                URL url = new URL(urlString);
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setRequestMethod("GET");

                // HTTP yanıt kodunu kontrol et
                int responseCode = conn.getResponseCode();
                if (responseCode != 200) {
                    BufferedReader errorReader = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
                    StringBuilder errorResponse = new StringBuilder();
                    String errorLine;
                    while ((errorLine = errorReader.readLine()) != null) {
                        errorResponse.append(errorLine);
                    }
                    errorReader.close();
                    System.out.println("HTTP hata kodu: " + responseCode + ", Yanıt: " + errorResponse.toString());
                    break; // Hata durumunda döngüden çık
                }

                BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();

                JSONObject myResponse = new JSONObject(response.toString());
                JSONArray items = myResponse.optJSONArray("items");

                if (items == null || items.length() == 0) {
                    break; // Eğer dönecek kitap yoksa çık
                }

                for (int i = 0; i < items.length(); i++) {
                    JSONObject book = items.getJSONObject(i).getJSONObject("volumeInfo");
                    Book newBook = new Book();

                    // Alanların null olup olmadığını kontrol et ve kaydet
                    String title = book.optString("title", null);
                    String authors = book.optJSONArray("authors") != null ? book.getJSONArray("authors").toString() : null;
                    if (title != null && authors != null) {
                        newBook.setTitle(title);
                        newBook.setAuthors(authors);
                        newBook.setImageLink(book.optJSONObject("imageLinks") != null ? book.getJSONObject("imageLinks").optString("thumbnail", null) : null);
                        int pageCount = book.optInt("pageCount", -1); // Varsayılan değeri -1 yap
                        if (pageCount != -1) newBook.setPageCount(pageCount);
                        String categories = book.optJSONArray("categories") != null ? book.getJSONArray("categories").toString() : null;
                        if (categories != null) newBook.setCategories(categories);
                        String price = book.optJSONObject("saleInfo") != null ? book.getJSONObject("saleInfo").optString("listPrice", null) : null;
                        if (price != null) newBook.setPrice(price);
                        double rating = book.optDouble("averageRating", -1); // Varsayılan değeri -1 yap
                        if (rating != -1) newBook.setRating(rating);
                        String subjects = book.optJSONArray("subjects") != null ? book.getJSONArray("subjects").toString() : null;
                        if (subjects != null) newBook.setSubjects(subjects);

                        // Tüm gerekli alanlar dolu ise kaydet
                        bookRepository.save(newBook);
                    }
                }

                startIndex += 10; // Sonraki 10 kitap için başlangıç indeksini güncelle
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
/*
    public List<Book> getFirstTwentyBooks() {
        // Fetch the first 20 books from the repositor
        return bookRepository.findTop20ByOrderByIdAsc(); // Adjust this if you have a different ordering
    }

    public List<Book> getBooksByGenre(String category) {
        return bookRepository.findByCategories(category);
    }

 */

    public List<Book> getAllBooks() {
        return bookRepository.findAll(); // Veritabanındaki tüm kitapları getirir
    }





}
