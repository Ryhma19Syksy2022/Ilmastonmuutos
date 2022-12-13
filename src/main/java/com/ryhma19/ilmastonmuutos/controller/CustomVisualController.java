package com.ryhma19.ilmastonmuutos.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ryhma19.ilmastonmuutos.repository.CustomVisualRepository;
import com.ryhma19.ilmastonmuutos.data.CustomVisual;

@RestController
@RequestMapping("/api")
public class CustomVisualController {

@Autowired
CustomVisualRepository CustomVisualRepository;  

@GetMapping("customvisuals/{visual_Id}")
public Optional<CustomVisual> getAllData(@PathVariable String visual_Id){
    return CustomVisualRepository.findById(visual_Id);
}
    
}

