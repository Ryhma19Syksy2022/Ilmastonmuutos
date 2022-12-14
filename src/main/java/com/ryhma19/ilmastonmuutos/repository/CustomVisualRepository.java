package com.ryhma19.ilmastonmuutos.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ryhma19.ilmastonmuutos.data.CustomVisual;

public interface CustomVisualRepository extends JpaRepository<CustomVisual, String> {
    
    Optional<CustomVisual> findById(String visual_Id);
    List<CustomVisual> findByOwner(String owner);

}
