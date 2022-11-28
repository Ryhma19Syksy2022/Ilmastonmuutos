package com.ryhma19.ilmastonmuutos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ryhma19.ilmastonmuutos.data.V9;
import com.ryhma19.ilmastonmuutos.repository.V9Repository;



@RestController
@RequestMapping("/api")
public class V9Controller {

@Autowired
V9Repository v9SectorRepository;  

@GetMapping("v9sectors")
public List<V9>getAllData(){
    return v9SectorRepository.findAll();
}
    
}
