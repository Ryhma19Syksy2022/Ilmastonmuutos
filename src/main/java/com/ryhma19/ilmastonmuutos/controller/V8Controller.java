package com.ryhma19.ilmastonmuutos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ryhma19.ilmastonmuutos.data.V8;
import com.ryhma19.ilmastonmuutos.service.V8Service;

@RestController
@RequestMapping("/api")
public class V8Controller {

    @Autowired
    V8Service v8Service;

    @GetMapping("charts/v8")
    public List<V8>getAllData(){
        return v8Service.getAllData();
    }

}