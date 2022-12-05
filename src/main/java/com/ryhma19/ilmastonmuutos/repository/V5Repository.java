package com.ryhma19.ilmastonmuutos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ryhma19.ilmastonmuutos.data.V5;

public interface V5Repository extends JpaRepository<V5, Integer> {
    @Query(value = "SELECT * FROM v1tov7 WHERE dataset_id = \"v5\" ", nativeQuery = true)
    public List<V5> getV5Data();
}
