package com.ryhma19.ilmastonmuutos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ryhma19.ilmastonmuutos.data.V1;
import com.ryhma19.ilmastonmuutos.dto.V1AnnualDTO;
import com.ryhma19.ilmastonmuutos.dto.V1MonthlyDTO;

public interface V1Repository extends JpaRepository<V1, Long> {
    // @Query("SELECT v1.time as time, v1.value as value, v1.datasetId as datasetId FROM V1 v1 WHERE v1.datasetId IN('v1-global-annual', 'v1-northern-annual', 'v1-southern-annual')")
    // List<V1AnnualDTO> getAnnualData();

    List<V1> findByDatasetId(String datasetId);

    // @Query("SELECT monthly.time as time, monthly.globalMonthly as globalMonthly, monthly.northernMonthly as northernMonthly, monthly.southernMonthly as southernMonthly, monthly.chart as chart FROM V1 monthly WHERE monthly.chart=2")
    // List<V1MonthlyDTO> getMonthlyData();

}