package fullstackbackend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fullstackbackend.exception.UserNotFoundException;
import fullstackbackend.model.User;
import fullstackbackend.repository.UserRepository;







@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository ur;

    // register
    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        return ur.save(newUser);
    }

    @PostMapping("/login")
    public boolean login(@RequestBody User user) {
        User storedUser = ur.findByUsername(user.getUsername());
        return storedUser != null && storedUser.getPassword().equals(user.getPassword());
    }
    

    @GetMapping("/users")
    public List<User> getUsers() {
        return ur.findAll();
    }
    
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        return ur.findById(id).orElseThrow(()->new UserNotFoundException(id));
    }
    
    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        
        return ur.findById(id).map(user -> {
            user.setUsername(newUser.getUsername());
            user.setEmail(newUser.getEmail());
            user.setName(newUser.getName());
            user.setPassword(newUser.getPassword());
            return ur.save(user);
        }).orElseThrow(()->new UserNotFoundException(id));
    }
    
    @DeleteMapping("/user-delete/{id}")
    String deleteUser(@PathVariable Long id){
        if(ur.existsById(id)){
            ur.deleteById(id);
        }else{
            throw new UserNotFoundException(id);
        }
        
        return "user deleted";
    }
}
