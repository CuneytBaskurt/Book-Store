package net.javaguides.book_backend.service;

import net.javaguides.book_backend.dto.BookDTO;
import net.javaguides.book_backend.model.Box; // Box sınıfını buradan import edin
import net.javaguides.book_backend.repository.BoxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoxService {

    @Autowired
    private BoxRepository boxRepository; // BoxRepository'i oluşturun

    public void saveBookToBox(BookDTO bookDTO) {
        // Box nesnesi oluşturun ve veritabanına kaydedin
        Box box = new Box();
        box.setId(bookDTO.getId());
        box.setImageLink(bookDTO.getImage_link());
        box.setAuthors(bookDTO.getAuthors());
        box.setPrice(bookDTO.getPrice());
        box.setTitle(bookDTO.getTitle());
        boxRepository.save(box);
    }

    public List<Box> getAllBoxes() {
        return boxRepository.findAll();
    }


}
