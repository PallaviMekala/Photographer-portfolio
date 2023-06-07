package com.photoport.Photographer.services;

import com.photoport.Photographer.entity.Bookyourslot;
import com.photoport.Photographer.repository.Bookyourslotrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Bookyourslotservice {

    @Autowired
    private Bookyourslotrepository bookyourslotrepository;


    public List<Bookyourslot> listAll() {
        return bookyourslotrepository.findAll();
    }
    public void save(Bookyourslot bookyourslot){
        bookyourslotrepository.save(bookyourslot);
    }

    public Bookyourslot get(Integer id){
        return bookyourslotrepository.findById(id).get();
    }

    public void delete(Integer id){
        bookyourslotrepository.deleteById(id);
    }
}
