package com.photoport.Photographer.services;


import com.photoport.Photographer.dto.Logindto;
import com.photoport.Photographer.entity.User;
import com.photoport.Photographer.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Loginservice {
    @Autowired
    private UserRepository userRepository;

    public User login(Logindto logindto){
        User user = userRepository.findByEmail(logindto.getEmail() );
        if(user != null && user.getPassword().equals(logindto.getPassword())){

            return user;
        }
        return null;
    }


}
