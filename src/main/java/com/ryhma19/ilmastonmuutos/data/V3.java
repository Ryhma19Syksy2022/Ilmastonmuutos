package com.ryhma19.ilmastonmuutos.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "v3_v4")

public class V3 {
    @Id
    private int id;
    private String time;
    private Double meanAnnual;
    private Double meanMonthly;
    private Double de08;
    private Double de082;
    private Double dss;
    private int chart;
    

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTime() {
        return this.time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Double getMeanAnnual() {
        return this.meanAnnual;
    }

    public void setMeanAnnual(Double meanAnnual) {
        this.meanAnnual = meanAnnual;
    }

    public Double getMeanMonthly() {
        return this.meanMonthly;
    }

    public void setMeanMonthly(Double meanMonthly) {
        this.meanMonthly = meanMonthly;
    }

    public Double getDe08() {
        return this.de08;
    }

    public void setDe08(Double de08) {
        this.de08 = de08;
    }

    public Double getDe082() {
        return this.de082;
    }

    public void setDe082(Double de082) {
        this.de082 = de082;
    }

    public Double getDss() {
        return this.dss;
    }

    public void setDss(Double dss) {
        this.dss = dss;
    }

    public int getChart() {
        return this.chart;
    }

    public void setChart(int chart) {
        this.chart = chart;
    }
    
}
