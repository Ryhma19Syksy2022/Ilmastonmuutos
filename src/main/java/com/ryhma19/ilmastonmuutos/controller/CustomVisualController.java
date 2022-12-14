package com.ryhma19.ilmastonmuutos.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ryhma19.ilmastonmuutos.repository.CustomVisualRepository;
import com.ryhma19.ilmastonmuutos.data.CustomVisual;
import com.ryhma19.ilmastonmuutos.service.customvisualService;

@RestController
@RequestMapping("/api")
public class CustomVisualController {

@Autowired
CustomVisualRepository CustomVisualRepository;  

@Autowired
customvisualService visualservice;

@GetMapping("customvisuals")
public List<CustomVisual>getAllData(){
    return CustomVisualRepository.findAll();
}

@PostMapping("savevisual")
public ResponseEntity<String> savevisual(@RequestParam String visual_id, 
                                            @RequestParam String owner, 
                                            @RequestParam Integer layout, 
                                            @RequestParam Boolean v1, 
                                            @RequestParam Boolean v3, 
                                            @RequestParam Boolean v5, 
                                            @RequestParam Boolean v6, 
                                            @RequestParam Boolean v7, 
                                            @RequestParam Boolean v8, 
                                            @RequestParam Boolean v9){

CustomVisual c = visualservice.savevisual(visual_id, owner, layout, v1, v3, v5, v6, v7, v8, v9);
return new ResponseEntity<>(c.visual_id, HttpStatus.OK);
}

@GetMapping("uservisuals")
public List<CustomVisual> findvisuals(@RequestParam String owner){
    return visualservice.findvisuals(owner);
}

}

