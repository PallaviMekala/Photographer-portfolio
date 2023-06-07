package com.photoport.Photographer.controller;


import com.photoport.Photographer.entity.Bookyourslot;
import com.photoport.Photographer.entity.User;
import com.photoport.Photographer.services.Bookyourslotservice;
import com.photoport.Photographer.services.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;


@RestController
@RequestMapping("/book")
@CrossOrigin
public class Bookyourslotcontroller {

    @Autowired
    private Bookyourslotservice bookyourslotservice;

    @PostMapping("/add")
    public String add (@RequestBody Bookyourslot bookyourslot) {
        bookyourslotservice.save(bookyourslot);
        return "Your slot is booked";
    }

    @GetMapping("/get")
    public List<Bookyourslot> get(){
        return bookyourslotservice.listAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bookyourslot> getbyid(@PathVariable Integer id){
        try {
            Bookyourslot bookyourslot = bookyourslotservice.get(id);
            return new ResponseEntity<Bookyourslot>(bookyourslot, HttpStatus.OK);
        }
        catch (NoSuchElementException e){
            return new ResponseEntity<Bookyourslot>(HttpStatus.NOT_FOUND);

        }
    }






}
