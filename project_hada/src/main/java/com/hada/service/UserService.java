package com.hada.service;

import com.hada.model.User;

public interface UserService {

    public void insertUser(User user) throws Exception;

    public User userLogin(String userId);

    public int idCheck(String userId) throws Exception;

    public int mailCheck(String userMail) throws Exception;
}
