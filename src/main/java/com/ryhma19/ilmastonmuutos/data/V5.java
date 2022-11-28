package com.ryhma19.ilmastonmuutos.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "v1tov7")

public class V5 {
    @Id
    private int id;
    private Double value;
    private String time;
    private String dataset_id;


    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Double getValue() {
        return this.value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public String getTime() {
        return this.time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getDataset_id() {
        return this.dataset_id;
    }

    public void setDataset_id(String dataset_id) {
        this.dataset_id = dataset_id;
    }

}