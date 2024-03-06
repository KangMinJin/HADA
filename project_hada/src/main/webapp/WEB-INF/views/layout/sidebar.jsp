<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<div class="side">
    <a href="<c:url value='/'/>">
        <div class="logo">
            <img src="resources/img/HADA_logo.png"/>
        </div>
    </a>
        <div class="profile">
            <c:if test="${user.userId == null}">
                <a href="<c:url value='/user/login'/>">로그인</a>
                <span>|</span>
                <a href="<c:url value='/user/join'/>">회원가입</a>
            </c:if>
            <c:if test="${user.userId != null}">
                <div class="profile-con">
                    <c:if test="${user.profileImg == null}"><img class="profile-img" src="resources/img/icon/profile_icon.png"/></c:if>
                    <c:if test="${user.profileImg != null}"><img class="profile-img" src="${user.profileImg}"/></c:if>
                    ${user.userId}
                </div>
<%--                <a href="<c:url value='/user/logout'/>">로그아웃</a>--%>
            </c:if>
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
                <li><a href="<c:url value='/user/logout'/>">로그아웃</a></li>
            </ul>
        </div>
    </div>
