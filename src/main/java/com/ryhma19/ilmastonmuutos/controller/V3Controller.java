package com.ryhma19.ilmastonmuutos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ryhma19.ilmastonmuutos.data.V3;
import com.ryhma19.ilmastonmuutos.repository.V3Repository;

@RestController
@RequestMapping("/api")
public class V3Controller {
    
    @Autowired
    V3Repository v3Repository;

    @GetMapping("charts/v3")
    public List<V3> getAllData() {
        return v3Repository.findAll();
    }

    @GetMapping("/charts/v3/1")
    public List<V3> getAnnualData() {
        return v3Repository.getAnnualData();
    }

    @GetMapping("/charts/v3/2")
    public List<V3> getMonthlyData() {
        return v3Repository.getMonthlyData();
    }

}
