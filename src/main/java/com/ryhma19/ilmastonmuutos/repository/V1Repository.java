package com.ryhma19.ilmastonmuutos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ryhma19.ilmastonmuutos.data.V1;

public interface V1Repository extends JpaRepository<V1, Long> {

    List<V1> findByDatasetId(String datasetId);

    List<V1> findByDatasetIdContaining(String datasetId);

}
