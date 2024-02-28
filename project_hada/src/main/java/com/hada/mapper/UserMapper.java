package com.hada.mapper;

import com.hada.model.UserVO;

public interface UserMapper {
	public void insertUser(UserVO user);

	public UserVO selectUser(String userId);
}
