package com.ryhma19.ilmastonmuutos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ryhma19.ilmastonmuutos.data.V3;

public interface V3Repository extends JpaRepository<V3, Integer> {
    @Query(value = "SELECT * FROM v1tov7 WHERE dataset_id LIKE \"%v3%\" OR dataset_id LIKE \"%v4%\" ORDER BY `time` asc", nativeQuery = true)
    public List<V3> getAnnualData();

}