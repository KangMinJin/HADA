package com.hada.service;

import com.hada.mapper.UserMapper;
import com.hada.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserMapper userMapper;

    @Override
    public void insertUser(User user) throws Exception {

        userMapper.insertUser(user);
    }

    @Override
    public User userLogin(String userId) {

        return userMapper.userLogin(userId);
    }

    @Override
    public int idCheck(String userId) throws Exception {

        return userMapper.idCheck(userId);
    }

    @Override
    public int mailCheck(String userMail) throws Exception {

        return userMapper.mailCheck(userMail);
    }


}
