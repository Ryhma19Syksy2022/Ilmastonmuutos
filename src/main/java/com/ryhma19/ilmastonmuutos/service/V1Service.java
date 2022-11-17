package com.ryhma19.ilmastonmuutos.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ryhma19.ilmastonmuutos.data.V1;
import com.ryhma19.ilmastonmuutos.dto.V1AnnualDTO;
import com.ryhma19.ilmastonmuutos.dto.V1MonthlyDTO;
import com.ryhma19.ilmastonmuutos.repository.V1Repository;

@Service
public class V1Service {

    @Autowired
    V1Repository v1Repository;

    public List<V1> getAllData() {
        return v1Repository.findAll();
    }

    // public List<V1AnnualDTO> getAnnualData() {
    //     return v1Repository.getAnnualData();
    // }

    public List<V1> groupBy() {
        List<V1> annualData = new ArrayList<>();
        annualData.addAll(v1Repository.findByDatasetId("v1-global-annual"));
        annualData.addAll(v1Repository.findByDatasetId("v1-northern-annual"));
        annualData.addAll(v1Repository.findByDatasetId("v1-southern-annual"));
        return annualData;

    }

    public List<V1> getDataset(String datasetId) {
        List<V1> dataset = new ArrayList<>();
        dataset.addAll(v1Repository.findByDatasetId(datasetId));

        return dataset;
    }

    // public List<V1MonthlyDTO> getMonthlyData() {
    // return v1Repository.getMonthlyData();
    // }

}
