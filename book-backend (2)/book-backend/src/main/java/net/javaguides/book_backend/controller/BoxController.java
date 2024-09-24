package net.javaguides.book_backend.controller;
import net.javaguides.book_backend.model.Box; // Doğru Box sınıfını içe aktar
import net.javaguides.book_backend.dto.BookDTO;
import net.javaguides.book_backend.service.BoxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.*;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class BoxController {

    @Autowired
    private BoxService boxService; // BoxService'i servis olarak oluşturun

    @PostMapping("/box")
    public ResponseEntity<?> addToBox(@RequestBody BookDTO bookDTO) {
        try {
            boxService.saveBookToBox(bookDTO);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Hata oluştu");
        }
    }

    @GetMapping("/box")
    public ResponseEntity<List<Box>> getAllBoxes() {
        List<Box> boxes = boxService.getAllBoxes();
        return ResponseEntity.ok(boxes);
    }

}
