package com.photoport.Photographer.controller;


import com.photoport.Photographer.dto.Logindto;
import com.photoport.Photographer.entity.User;
import com.photoport.Photographer.services.Loginservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class Logincontroller {
    @Autowired
    private Loginservice loginservice;

    @PostMapping
    public ResponseEntity<Map<String, Object>> login(@RequestBody Logindto loginDto) {
        User user = loginservice.login(loginDto);
        if (user != null) {
            Integer userId = user.getId();
            String message = "Login successful with id ";
            Map<String, Object> response = new HashMap<>();
            response.put("id", userId);
            response.put("message", message);
            return ResponseEntity.ok(response);
        } else {
            String message = "Login failed. Please check your email and password.";
            Map<String, Object> response = new HashMap<>();
            response.put("message", message);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

}
