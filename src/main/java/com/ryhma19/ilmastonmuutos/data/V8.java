package com.ryhma19.ilmastonmuutos.data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "v8")
public class V8 {

    @Id
    private int id;
    private int time;
    private double afghanistan;
    private double albania;
    private double algeria;
    


    public V8() {
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getTime() {
        return this.time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public double getAfghanistan() {
        return this.afghanistan;
    }

    public void setAfghanistan(double afghanistan) {
        this.afghanistan = afghanistan;
    }

    public double getAlbania() {
        return this.albania;
    }

    public void setAlbania(double albania) {
        this.albania = albania;
    }

    public double getAlgeria() {
        return this.algeria;
    }

 
    
    
}
