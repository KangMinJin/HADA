package com.hada.controller;

import com.hada.model.UserVO;
import com.hada.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.net.URLEncoder;

@Controller
@RequestMapping("/user")
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @GetMapping("/join")
    public String joinGET() {
        logger.info("회원가입 페이지 진입");
        return "joinForm";
    }

    @PostMapping("/join")
    public String joinPOST(UserVO user) throws Exception {
        logger.info("join 진입");

        userService.insertUser(user);

        logger.info("join Service 성공");

        return "redirect:/";
    }

    @GetMapping("/login")
    public String loginGET() {
        logger.info("로그인 페이지 진입");
        return "loginForm";
    }

    @PostMapping("/login")
    public String loginPOST(String userId, String userPwd, String toURL, boolean rememberuserId,
                            HttpServletRequest request, HttpServletResponse response) throws Exception {
        if (!loginChk(userId, userPwd)) {
            String msg = URLEncoder.encode("아이디 또는 비밀번호가 일치하지 않습니다.", "utf-8");

            return "redirect:/login?msg="+msg;
        }
        HttpSession session = request.getSession();
        session.setAttribute("userId", userId);

        if (rememberuserId) {
            Cookie cookie = new Cookie("userId", userId);
            response.addCookie(cookie);
        } else {
            Cookie cookie = new Cookie("userId", userId);
            cookie.setMaxAge(0);

            response.addCookie(cookie);
        }
        toURL = toURL == null || toURL.equals("") ? "/" : toURL;

        return "redirect:"+toURL;
    }

    private boolean loginChk(String userId, String userPwd) {

        UserVO user = null;

        try {
            user = userService.selectUser(userId);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return user != null && user.getUserPwd().equals(userPwd);
    }
}
