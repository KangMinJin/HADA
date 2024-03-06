<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false"%>
<html>
<head>
    <title>HADA.-로그인</title>
    <link rel="stylesheet" href="../resources/css/loginForm.css">
</head>
<body>
<div class="wrapper">
    <div class="main">
        <a href="<c:url value='/'/>">
            <div class="logo">
                <img src="../resources/img/HADA_logo.png"/>
            </div>
        </a>
        <form action="<c:url value='/user/login'/>" method="post" onsubmit="return formCheck(this);">
            <input type="text" class="login-inp" name="userId" value="${cookie.userId.value}" placeholder="아이디" autofocus>
            <input type="password" class="login-inp" name="userPwd" placeholder="비밀번호">
            <input type="hidden" name="toURL" value="${param.toURL}">
            <label class="remember"><input type="checkbox" name="rememberUserId" value="on" ${empty cookie.userId.value ? "":"checked"}> 아이디 기억</label>
            <div id="msg">
                <c:if test="${result == 0}">사용자 아이디 또는 비밀번호가 일치하지 않습니다.</c:if>
                <c:if test="${result == 1}">정지된 아이디입니다. 운영자에게 문의하세요.</c:if>
            </div>
            <button class="login-btn">로그인</button>
            <div class="con">
                <a href="">아이디 찾기</a>
                <span>|</span>
                <a href="">비밀번호 찾기</a>
            </div>
            <div class="con2">
                <a href="<c:url value='/user/join'/>">계정이 없으신가요? <span class="sign-up">가입하기</span></a>
            </div>
        </form>
    </div>
</div>
    <script>
        function formCheck(frm) {
            let msg ='';
            if(frm.userId.value.length==0) {
                setMessage('아이디를 입력해주세요.', frm.userId);
                return false;
            }
            if(frm.userPwd.value.length==0) {
                setMessage('비밀번호를 입력해주세요.', frm.userPwd);
                return false;
            }
            return true;
        }
        function setMessage(msg, element){
            document.getElementById("msg").innerHTML = ` ${'${msg}'}`;
            if(element) {
                element.select();
            }
        }
    </script>
</body>
</html>
