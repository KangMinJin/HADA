package com.hada.mapper;

import com.hada.model.User;

public interface UserMapper {
	public void insertUser(User user);

	public User userLogin(String userId);

	public int idCheck(String userId);

	public int mailCheck(String userMail);
}
