package com.photoport.Photographer.controller;

import com.photoport.Photographer.entity.User;
import com.photoport.Photographer.repository.UserRepository;
import com.photoport.Photographer.services.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class Usercontroller {

    @Autowired
    private Userservice userservice;

    @PostMapping("/Users")
    public String add (@RequestBody User user) {
        userservice.save(user);
        return "new user is added";
    }

    @GetMapping("/get")
    public String get(){
        return "successfully fetched data";
    }





}
