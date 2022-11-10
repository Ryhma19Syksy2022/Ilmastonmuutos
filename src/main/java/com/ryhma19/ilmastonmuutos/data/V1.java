package com.ryhma19.ilmastonmuutos.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "v1_v2")

public class V1 {
    @Id
    private Long id;
    private String time;
    private Double globalAnnual;
    private Double northernAnnual;
    private Double southernAnnual;
    private Double globalMonthly;
    private Double northernMonthly;
    private Double southernMonthly;
    private Integer chart;

    public V1() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Double getGlobalAnnual() {
        return globalAnnual;
    }

    public void setGlobalAnnual(Double globalAnnual) {
        this.globalAnnual = globalAnnual;
    }

    public Double getNorthernAnnual() {
        return northernAnnual;
    }

    public void setNorthernAnnual(Double northernAnnual) {
        this.northernAnnual = northernAnnual;
    }

    public Double getSouthernAnnual() {
        return southernAnnual;
    }

    public void setSouthernAnnual(Double southernAnnual) {
        this.southernAnnual = southernAnnual;
    }

    public Double getGlobalMonthly() {
        return globalMonthly;
    }

    public void setGlobalMonthly(Double globalMonthly) {
        this.globalMonthly = globalMonthly;
    }

    public Double getNorthernMonthly() {
        return northernMonthly;
    }

    public void setNorthernMonthly(Double northernMonthly) {
        this.northernMonthly = northernMonthly;
    }

    public Double getSouthernMonthly() {
        return southernMonthly;
    }

    public void setSouthernMonthly(Double southernMonthly) {
        this.southernMonthly = southernMonthly;
    }

    public Integer getChart() {
        return chart;
    }

    public void setChart(Integer chart) {
        this.chart = chart;
    }

}
