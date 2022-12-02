package com.ryhma19.ilmastonmuutos.dto;

public interface V1MonthlyDTO {
    String getTime();
    String getGlobalMonthly();
    String getNorthernMonthly();

    String getSouthernMonthly();

    String getChart();
}