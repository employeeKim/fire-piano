package com.web;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/common")
public class CommonController {

    @GetMapping("/ping")
    public String ping() {
        System.out.println("✅ /api/ping 호출됨");
        return "pong";
    }

}
