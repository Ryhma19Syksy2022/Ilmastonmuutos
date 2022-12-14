package com.ryhma19.ilmastonmuutos.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ryhma19.ilmastonmuutos.data.V1;
import com.ryhma19.ilmastonmuutos.data.V10;
import com.ryhma19.ilmastonmuutos.repository.V10Repository;
import com.ryhma19.ilmastonmuutos.repository.V1Repository;

@Service
public class V1Service {

    @Autowired
    V1Repository v1Repository;

    @Autowired
    V10Repository v10Repository;

    public List<V1> getAllData() {
        return v1Repository.findAll();
    }

    public List<V1> getDataset(String datasetId) {

        return v1Repository.findByDatasetId(datasetId);
    }

    public List<V1> getV1V2Data() {
        List<V1> v1V2Data = new ArrayList<>();
        v1V2Data.addAll(v1Repository.findByDatasetIdContaining("v1"));
        v1V2Data.addAll(v1Repository.findByDatasetIdContaining("v2"));
        return v1V2Data;
    }

    public List<V1> getV7Data() {
        List<V1> v7Data = new ArrayList<>();
        v7Data.addAll(v1Repository.findByDatasetId("v7-GAST"));
        v7Data.addAll(v1Repository.findByDatasetId("v7-co2"));
        return v7Data;
    }

    public List<V10> getV10Data() {
        return v10Repository.findAll();
    }

}
