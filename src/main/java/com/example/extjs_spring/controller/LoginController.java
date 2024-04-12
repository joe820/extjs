package com.example.extjs_spring.controller;

import com.example.extjs_spring.dao.LoginDao;
import com.example.extjs_spring.domain.Admin;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class LoginController {

    @Autowired
    private LoginDao dao;

    @RequestMapping(value = "/loginInfo")
    public Map<String, Object> loginInfo(Admin admin, HttpServletRequest request) {
        Map<String, Object> result = null;
        try {
            Map<String, Object> session = (Map<String, Object>) request.getSession().getAttribute("admin");
            System.out.println(session);

            result = dao.loginInfo(admin);
            result.put("code", 200);

            request.getSession().setAttribute("admin", result);

        } catch (Exception e) {
            e.printStackTrace();
            result = new HashMap<String, Object>();
            result.put("code", 404);
            result.put("msg", e.getMessage());
            return result;
        }
        return result;
    }


    @RequestMapping(value = "/fail")
    public Map<String, Object> fail() {
        Map<String, Object> result = new HashMap<>();

        result.put("code", 999);

        return result;
    }

}
