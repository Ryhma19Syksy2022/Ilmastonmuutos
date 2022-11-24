package com.ryhma19.ilmastonmuutos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ryhma19.ilmastonmuutos.data.V8;
import com.ryhma19.ilmastonmuutos.repository.V8Repository;

@RestController
@RequestMapping("/api")
public class V8Controller {

    @Autowired
    V8Repository v8Repository;

    @GetMapping("v8")
    public List<V8>getAllData(){
        return v8Repository.findAll();
    }
    
}
