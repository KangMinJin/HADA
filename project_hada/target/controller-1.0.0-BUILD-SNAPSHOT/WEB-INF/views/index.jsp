<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>HADA.</title>
    <link rel="stylesheet" href="resources/css/index.css">
</head>
<body>
    <div class="wrapper">
        <div class="side">
            <div class="logo">
                <img src="resources/img/HADA_logo.png"/>
            </div>
            <div class="profile">
                프로필
<%--                <button type="button" onclick="location.href='login'">로그인</button>--%>
                <a href="<c:url value='/user/login'/>">로그인</a>
                <span>|</span>
                <a href="<c:url value='/user/join'/>">회원가입</a>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="<c:url value='/'/>">홈</a></li>
                    <li><a href="#">검색</a></li>
                    <li><a href="#">알림</a></li>
                    <li><a href="#">프로필</a></li>
                </ul>
            </div>
            <div class="more-menu">
                ... 더보기
                <ul>
                <li><a href="#">설정</a></li>
                <li><a href="#">고객센터</a></li>
                <li><a href="#">로그아웃</a></li>
                </ul>
            </div>
        </div>
        <div class="article">
            메인
        </div>
    </div>
<%--    <p>여기는 인덱스.</p>--%>
<%--    <button type="button" onclick="location.href='login'">로그인</button>--%>
<%--    <button type="button" onclick="location.href='register'">회원가입</button>--%>
</body>
</html>
