package com.photoport.Photographer.controller;

import com.photoport.Photographer.entity.Bookyourslot;
import com.photoport.Photographer.entity.Testimonials;
import com.photoport.Photographer.services.Testimonialsservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;


@RestController
@RequestMapping("/test")
@CrossOrigin
public class Testimonialscontroller {

    @Autowired
    private Testimonialsservice testimonialsservice;

    @PostMapping("/add")
    public String add (@RequestBody Testimonials testimonials) {
        testimonialsservice.save(testimonials);
        return "Your review is added";
    }

    @GetMapping("/get")
    public List<Testimonials> get(){
        return testimonialsservice.listAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Testimonials> getbyid(@PathVariable Integer id){
        try {
            Testimonials testimonials = testimonialsservice.get(id);
            return new ResponseEntity<Testimonials>(testimonials, HttpStatus.OK);
        }
        catch (NoSuchElementException e){
            return new ResponseEntity<Testimonials>(HttpStatus.NOT_FOUND);

        }
    }

}
