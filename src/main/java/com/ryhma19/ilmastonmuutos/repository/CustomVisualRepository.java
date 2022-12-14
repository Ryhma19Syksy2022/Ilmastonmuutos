package com.ryhma19.ilmastonmuutos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ryhma19.ilmastonmuutos.data.CustomVisual;

public interface CustomVisualRepository extends JpaRepository<CustomVisual, String> {
    
    List<CustomVisual> findByOwner(String owner);

}
