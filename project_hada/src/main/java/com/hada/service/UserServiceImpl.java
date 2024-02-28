package com.hada.service;

import com.hada.mapper.UserMapper;
import com.hada.model.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserMapper userMapper;
    @Override
    public void insertUser(UserVO user) throws Exception {
        userMapper.insertUser(user);
    }

    @Override
    public UserVO selectUser(String userId) {
        UserVO user = null;
        user = userMapper.selectUser(userId);
        return user;
    }
}
