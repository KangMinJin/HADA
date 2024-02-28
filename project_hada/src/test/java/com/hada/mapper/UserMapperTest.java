package com.hada.mapper;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.hada.model.UserVO;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class UserMapperTest {
	
	@Autowired
	private UserMapper userMapper;
	
	UserVO user = new UserVO();
	
	@Test
	public void insertUser() {
	
    user.setUserId("test2");
    user.setUserPwd("test");
    user.setUserMail("test2@test.com");
    user.setUserName("test2");
	
	userMapper.insertUser(user);			//쿼리 메서드 실행
	}

//	@Test
//	public void selectUser() {
//		String userId = "azx";
//		UserVO user = null;
//		user = userMapper.selectUser(userId);
//		System.out.println("user.toString() = " + user.toString());
//	}
}
