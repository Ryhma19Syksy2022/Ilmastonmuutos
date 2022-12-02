package com.ryhma19.ilmastonmuutos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class IlmastonmuutosApplication {

	public static void main(String[] args) {
		SpringApplication.run(IlmastonmuutosApplication.class, args);
	}

}
