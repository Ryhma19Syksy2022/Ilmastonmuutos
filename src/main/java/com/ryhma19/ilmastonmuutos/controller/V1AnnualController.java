package com.ryhma19.ilmastonmuutos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ryhma19.ilmastonmuutos.data.V1Annual;
import com.ryhma19.ilmastonmuutos.repository.V1AnnualRepository;

@RestController
@RequestMapping("/api")
public class V1AnnualController {

    @Autowired
    V1AnnualRepository v1AnnualRepository;

    @GetMapping("v1annual")
    public List<V1Annual> getAllData() {
        return v1AnnualRepository.findAll();
    }

}
