package com.ryhma19.ilmastonmuutos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ryhma19.ilmastonmuutos.data.user;

@Repository
public interface userRepository extends JpaRepository<user,String>{
    
}
