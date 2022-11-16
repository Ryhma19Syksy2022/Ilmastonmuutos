package com.ryhma19.ilmastonmuutos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ryhma19.ilmastonmuutos.data.V9Sectors;
import com.ryhma19.ilmastonmuutos.repository.V9SectorRepository;



@RestController
@RequestMapping("/api")
public class V9SectorController {

@Autowired
V9SectorRepository v9SectorRepository;  

@GetMapping("v9sectors")
public List<V9Sectors>getAllData(){
    return v9SectorRepository.findAll();
}
    
}
