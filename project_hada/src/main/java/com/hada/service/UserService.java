package com.hada.service;

import com.hada.model.UserVO;

public interface UserService {

    public void insertUser(UserVO user) throws Exception;

    public UserVO selectUser(String userId);
}
