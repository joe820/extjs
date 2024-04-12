package com.example.extjs_spring.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/")
public class APIController {

    @RequestMapping("/sessionCheck")
    public Map<String, Object> sessionCheck(HttpServletRequest request) {
        Map<String, Object> result = new HashMap<>();

        result.put("code", 200);

        return result;
    }

}
