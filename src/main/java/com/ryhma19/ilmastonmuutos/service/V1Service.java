package com.ryhma19.ilmastonmuutos.service;

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

    public List<V1AnnualDTO> getAnnualData() {
        return v1Repository.getAnnualData();
    }

    public List<V1MonthlyDTO> getMonthlyData() {
        return v1Repository.getMonthlyData();
    }

}
