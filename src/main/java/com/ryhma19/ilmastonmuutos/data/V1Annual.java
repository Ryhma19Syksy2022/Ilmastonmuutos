package com.ryhma19.ilmastonmuutos.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "global_northern_southern_annual")

public class V1Annual {
    @Id
    private int time;
    private double globalAnomaly;
    private double globalLcl;
    private double globalUcl;
    private double northernAnomaly;
    private double northernLcl;
    private double northernUcl;
    private double southernAnomaly;
    private double southernLcl;
    private double southernUcl;

    public V1Annual() {
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public double getGlobalAnomaly() {
        return globalAnomaly;
    }

    public void setGlobalAnomaly(double globalAnomaly) {
        this.globalAnomaly = globalAnomaly;
    }

    public double getGlobalLcl() {
        return globalLcl;
    }

    public void setGlobalLcl(double globalLcl) {
        this.globalLcl = globalLcl;
    }

    public double getGlobalUcl() {
        return globalUcl;
    }

    public void setGlobalUcl(double globalUcl) {
        this.globalUcl = globalUcl;
    }

    public double getNorthernAnomaly() {
        return northernAnomaly;
    }

    public void setNorthernAnomaly(double northernAnomaly) {
        this.northernAnomaly = northernAnomaly;
    }

    public double getNorthernLcl() {
        return northernLcl;
    }

    public void setNorthernLcl(double northernLcl) {
        this.northernLcl = northernLcl;
    }

    public double getNorthernUcl() {
        return northernUcl;
    }

    public void setNorthernUcl(double northernUcl) {
        this.northernUcl = northernUcl;
    }

    public double getSouthernAnomaly() {
        return southernAnomaly;
    }

    public void setSouthernAnomaly(double southernAnomaly) {
        this.southernAnomaly = southernAnomaly;
    }

    public double getSouthernLcl() {
        return southernLcl;
    }

    public void setSouthernLcl(double southernLcl) {
        this.southernLcl = southernLcl;
    }

    public double getSouthernUcl() {
        return southernUcl;
    }

    public void setSouthernUcl(double southernUcl) {
        this.southernUcl = southernUcl;
    }

}
