<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<html>
<head>
    <title>HADA.-회원가입</title>
    <link rel="stylesheet" href="../resources/css/joinForm.css">
</head>
<body>
<div class="main">
    <a href="<c:url value='/'/>">
        <div class="logo">
            <img src="../resources/img/HADA_logo.png"/>
        </div>
    </a>
    <div class="con">
        <form action="<c:url value="/user/join"/>" method="POST" onsubmit="return formCheck(this)">
        <%--    <div id="msg" class="error-msg"></div> <!-- 에러 메시지 출력 부분 추가 -->--%>
            <div id="msg" class="msg"><form:errors path="userId"/></div>
            <input class="input-field" type="text" id="userId" name="userId" placeholder="아이디 : 5~20자리의 영문, 숫자와 특수기호(_,-)" minlength="5" maxlength="20">
            <div class="errMsgU"></div>
            <div class="error-msg"><c:out value="${userNameError}" /></div> <!-- 아이디 에러 메시지 추가 -->
            <input class="input-field" type="password" name="userPwd" placeholder="비밀번호 : 8~20자의 영문 대/소문자, 숫자와 특수문자 조합" minlength="8" maxlength="20">
            <div class="errMsgPwd"></div>
            <div class="error-msg"><c:out value="${pwdError}" /></div> <!-- 비밀번호 에러 메시지 추가 -->
            <input class="input-field" type="text" name="userMail" placeholder="이메일 : example@example.com">
            <div class="errMsgEmail"></div>
            <div class="error-msg"><c:out value="${emailError}" /></div> <!-- 이메일 에러 메시지 추가 -->
            <input class="input-field" type="text" name="userName" placeholder="닉네임">
            <div class="error-msg"><c:out value="${nicknameError}" /></div> <!-- 닉네임 에러 메시지 추가 -->
            <div class="errMsgNickname"></div>
            <button class="regist-btn">회원가입</button>
        </form>
    </div>
    <div class="con2">
        <a href="<c:url value='/user/login'/>">계정이 있으신가요? <span class="login">로그인</span></a>
    </div>
</div>
<script>
    function formCheck(frm) {
        let msg ='';

        if(frm.userName.value.length < 5 || frm.userName.value.length > 20) {
            setMessage('5~20자의 영문, 숫자와 특수기호(_),(-)만 입력해 주세요.', frm.userName);
            return false;
        }

        if(frm.pwd.value.length < 8 || frm.pwd.value.length > 20) {
            setMessage('8~20자의 영문 대/소문자, 숫자와 특수문자를 입력해 주세요.', frm.pwd);
            return false;
        }

        // if

        return true;
    }

    function setMessage(msg, element){
        document.getElementById("msg").innerHTML = `<i class="fa fa-exclamation-circle"> ${'${msg}'}</i>`;

        if(element) {
            element.select();
        }
    }
</script>
</body>
</html>
