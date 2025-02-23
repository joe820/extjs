package com.example.extjs_spring.dao;

import com.example.extjs_spring.domain.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Repository
public class LoginDao {

    @Autowired
    private JdbcTemplate sql;

    public Map<String, Object> loginInfo(Admin admin) throws SQLException {
        String query = "SELECT admin_name,admin_id FROM admin " +
                "WHERE admin_id = '"+admin.getAdminId() +"' AND admin_pwd = '"+admin.getAdminPwd()+"' ";

        return sql.queryForMap(query);
    }
}
