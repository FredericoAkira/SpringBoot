package fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fullstackbackend.model.User;




public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
