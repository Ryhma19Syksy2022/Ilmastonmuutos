package com.ryhma19.ilmastonmuutos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ryhma19.ilmastonmuutos.data.V3;

public interface V3Repository extends JpaRepository<V3, Integer> {
    @Query(value = "SELECT * FROM v3_v4 WHERE mean_monthly IS NULL ORDER BY time", nativeQuery = true)
    public List<V3> getAnnualData();

    @Query(value = "SELECT * FROM v3_v4 WHERE mean_monthly IS NOT NULL ORDER BY time", nativeQuery = true)
    public List<V3> getMonthlyData();
}