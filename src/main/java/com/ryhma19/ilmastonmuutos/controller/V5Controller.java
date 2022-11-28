package com.ryhma19.ilmastonmuutos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ryhma19.ilmastonmuutos.data.V5;
import com.ryhma19.ilmastonmuutos.repository.V5Repository;

@RestController
@RequestMapping("/api")
public class V5Controller {
    
    @Autowired
    V5Repository v5Repository;

    @GetMapping("/charts/v5")
    public List<V5> getAllData() {
        return v5Repository.getV5Data();
    }
}
