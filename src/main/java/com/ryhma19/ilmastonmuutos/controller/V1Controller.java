package com.ryhma19.ilmastonmuutos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ryhma19.ilmastonmuutos.data.V1;
import com.ryhma19.ilmastonmuutos.dto.V1AnnualDTO;
import com.ryhma19.ilmastonmuutos.dto.V1MonthlyDTO;
import com.ryhma19.ilmastonmuutos.service.V1Service;

@RestController
@RequestMapping("/api")
public class V1Controller {

    @Autowired
    V1Service v1Service;

    @GetMapping("charts/v1")
    public List<V1> getAllData() {
        return v1Service.getAllData();
    }

    @GetMapping("/charts/v1/1")
    public List<V1AnnualDTO> getAnnualData() {
        return v1Service.getAnnualData();
    }

    @GetMapping("/charts/v1/2")
    public List<V1MonthlyDTO> getMonthlyData() {
        return v1Service.getMonthlyData();
    }

}
