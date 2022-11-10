package com.ryhma19.ilmastonmuutos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ryhma19.ilmastonmuutos.data.V1;
import com.ryhma19.ilmastonmuutos.dto.V1AnnualDTO;
import com.ryhma19.ilmastonmuutos.dto.V1MonthlyDTO;

public interface V1Repository extends JpaRepository<V1, Long> {
    @Query("SELECT annual.time as time, annual.globalAnnual as globalAnnual, annual.northernAnnual as northernAnnual, annual.southernAnnual as southernAnnual FROM V1 annual WHERE annual.chart=1")
    List<V1AnnualDTO> getAnnualData();

    @Query("SELECT monthly.time as time, monthly.globalMonthly as globalMonthly, monthly.northernMonthly as northernMonthly, monthly.southernMonthly as southernMonthly FROM V1 monthly WHERE monthly.chart=2")
    List<V1MonthlyDTO> getMonthlyData();

}
