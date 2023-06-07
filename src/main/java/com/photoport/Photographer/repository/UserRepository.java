package com.photoport.Photographer.repository;

import com.photoport.Photographer.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository< User, Integer> {

    User findByEmail(String email);
}


