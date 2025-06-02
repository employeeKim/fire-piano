package com.firepiano.fire_piano;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FirePianoApplication {

	public static void main(String[] args) {
		SpringApplication.run(FirePianoApplication.class, args);
		System.out.println("서버 실행!");
	}

}
