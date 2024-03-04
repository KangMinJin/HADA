package com.hada.mapper;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.hada.model.User;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class UserMapperTest {
	
	@Autowired
	private UserMapper userMapper;
	
	User user = new User();

	// 회원가입
	@Test
	public void insertUser() {
	
    user.setUserId("test4");
    user.setUserPwd("test");
    user.setUserMail("test4@test.com");
    user.setUserName("test4");
	
	userMapper.insertUser(user);			//쿼리 메서드 실행
	}

	// 아이디 중복 검사
	@Test
	public void idCheck() throws Exception {
		String id1 = "azx";
		String id2 = "asdasdasd";
		int result1 = userMapper.idCheck(id1);
		int result2 = userMapper.idCheck(id2);
		System.out.println("result1 = " + result1);
		System.out.println("result2 = " + result2);
	}

	// 이메일 중복 검사
	@Test
	public void mailCheck() throws Exception {
		String mail1 = "test@test.com";
		String mail2 = "asdasdasd";
		int result1 = userMapper.mailCheck(mail1);
		int result2 = userMapper.mailCheck(mail2);
		System.out.println("result1 = " + result1);
		System.out.println("result2 = " + result2);
	}

	@Test
	public void userLogin() throws Exception {
		String userId = "azx";
//		User user = userMapper.userLogin(userId);
		System.out.println("result = " + userMapper.userLogin(userId));
	}
}
