package net.javaguides.book_backend.service;

import net.javaguides.book_backend.model.User;
import net.javaguides.book_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User loginUser(String email, String password) {
        // E-posta ile kullanıcıyı bul
        Optional<User> userOptional = userRepository.findByEmail(email);

        // Kullanıcı mevcutsa şifreyi kontrol et
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getPassword().equals(password)) {
                return user; // Doğru şifre
            }
        }

        // Hatalı durumlar için uygun bir istisna fırlat
        throw new RuntimeException("Invalid email or password");
    }


}

