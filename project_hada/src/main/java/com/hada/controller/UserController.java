package com.hada.controller;

import com.hada.model.User;
import com.hada.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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

    @Autowired
    private BCryptPasswordEncoder pwEncoder;

    @GetMapping("/join")
    public String joinGET() {
        logger.info("회원가입 페이지 진입");
        return "joinForm";
    }

    @PostMapping("/join")
    public String joinPOST(User user) throws Exception {
        logger.info("join 진입");

        userService.insertUser(user);

        logger.info("join Service 성공");

//        String rawPw = user.getUserPwd();
//        String encodePw = pwEncoder.encode(rawPw);
//        user.setUserPwd(encodePw);
//
//        userService.insertUser(user);

        return "redirect:/";
    }

    @PostMapping("/userIdChk")
    @ResponseBody
    public String userIdChkPOST(String userId) throws Exception {
        logger.info("userIdChkPOST() 진입");
        int result = userService.idCheck(userId);
        logger.info("결과값 = " + result);
        if (result != 0) {
            return "fail";
        } else {
            return "success";
        }
    }

    @PostMapping("/userMailChk")
    @ResponseBody
    public String userMailChkPOST(String userMail) throws Exception {
        logger.info("userMailChkPOST() 진입");
        int result = userService.mailCheck(userMail);
        logger.info("결과값 = " + result);
        if (result != 0) {
            return "fail";
        } else {
            return "success";
        }
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
            // todo 아이디 기억 구현
        }

        toURL = toURL == null || toURL.equals("") ? "/" : toURL;

        return "redirect:"+toURL;
    }

    private boolean loginChk(String userId, String userPwd) {
        logger.info("loginChk() 진입");
        User user = null;

        try {
            logger.info("userId = " + userId);
            user = userService.userLogin(userId);
            logger.info("User userId = " + user.getUserId());

        } catch (Exception e) {

            e.printStackTrace();
            return false;

        }
        return user != null && user.getUserPwd().equals(userPwd);
    }
}
