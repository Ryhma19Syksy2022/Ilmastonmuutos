package com.ryhma19.ilmastonmuutos.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "sector")


public class V9Sectors {
    @Id
    private int id;
    private double co2;
    private String sectors;
    private String subSectors;

    public V9Sectors() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getCo2() {
        return co2;
    }

    public void setCo2(double co2) {
        this.co2 = co2;
    }

    public String getSectors() {
        return sectors;
    }

    public void setSectors(String sectors) {
        this.sectors = sectors;
    }

    public String getSubSectors() {
        return subSectors;
    }

    public void setSubSectors(String subSectors) {
        this.subSectors = subSectors;
    }

}