package com.ryhma19.ilmastonmuutos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ryhma19.ilmastonmuutos.data.V1;
import com.ryhma19.ilmastonmuutos.data.V10;
import com.ryhma19.ilmastonmuutos.service.V1Service;

@RestController
@RequestMapping("/api")
public class V1Controller {

    @Autowired
    V1Service v1Service;
    
    @GetMapping("charts/{datasetId}")
    public List<V1> getDataset(@PathVariable String datasetId) {
        return v1Service.getDataset(datasetId);
    }

    @GetMapping("charts/v1v2/all")
    public List<V1> getV1V2Data() {
        return v1Service.getV1V2Data();
    }

    @GetMapping(value = "charts/v7/all")
    public List<V1> getV7Data() {
        return v1Service.getV7Data();
    }

    @GetMapping("/charts/v7/v10")
    public List<V10> getV10Data() {
        return v1Service.getV10Data();
    }

}
