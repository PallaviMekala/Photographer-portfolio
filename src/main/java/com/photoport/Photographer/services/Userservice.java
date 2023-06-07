package com.photoport.Photographer.services;

import com.photoport.Photographer.entity.User;
import com.photoport.Photographer.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Userservice {

    @Autowired
    private UserRepository userRepository;



    public List<User> listAll() {
        return userRepository.findAll();
    }
    public void save(User user){
        userRepository.save(user);
    }

    public UserRepository get(Integer id){
        return (UserRepository) userRepository.findById(id).get();
    }

    public void delete(Integer id){
        userRepository.deleteById(id);
    }
}
