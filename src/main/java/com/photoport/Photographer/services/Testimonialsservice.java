package com.photoport.Photographer.services;
import com.photoport.Photographer.entity.Bookyourslot;
import com.photoport.Photographer.entity.Testimonials;
import com.photoport.Photographer.repository.TestimonialsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class Testimonialsservice {

    @Autowired
    private TestimonialsRepository testimonialsRepository;

    public List<Testimonials> listAll() {
        return testimonialsRepository.findAll();
    }

    public void save(Testimonials testimonials){
        testimonialsRepository.save(testimonials);
    }


    public Testimonials get(Integer id){
        return testimonialsRepository.findById(id).get();
    }

    public void delete(Integer id){
        testimonialsRepository.deleteById(id);
    }
}
