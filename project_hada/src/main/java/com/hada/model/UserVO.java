package com.hada.model;

import java.sql.Timestamp;
import java.util.Objects;

public class UserVO {
	private Long userNo;
    private String userId;
    private String userMail;
    private String userPwd;
    private String userName;
    private String profileImg;
    private Timestamp regDate;
    private Timestamp upDate;
    private Timestamp delDate;
    private char status;

    public UserVO(){}
    
    public UserVO(String userId, String userPwd, String userMail, String userName) {
	    this.userId = userId;
	    this.userPwd = userPwd;
	    this.userMail = userMail;
	    this.userName = userName;
}
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserVO user = (UserVO) o;
        return Objects.equals(userNo, user.userNo) && Objects.equals(userId, user.userId) && Objects.equals(userPwd, user.userPwd) && Objects.equals(userMail, user.userMail) && Objects.equals(userName, user.userName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userNo, userId, userPwd, userMail, userName);
    }

    @Override
    public String toString() {
        return "User{" +
                "userNo=" + userNo +
                ", userId='" + userId + '\'' +
                ", userPwd='" + userPwd + '\'' +
                ", userMail='" + userMail + '\'' +
                ", userName='" + userName + '\'' +
                ", profileImg='" + profileImg + '\'' +
                ", regDate=" + regDate +
                ", upDate=" + upDate +
                ", delDate=" + delDate +
                ", status=" + status +
                '}';
    }

    public Long getUserNo() {
        return userNo;
    }

    public void setUserNo(Long userNo) {
        this.userNo = userNo;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserMail() {
        return userMail;
    }

    public void setUserMail(String userMail) {
        this.userMail = userMail;
    }

    public String getUserPwd() {
        return userPwd;
    }

    public void setUserPwd(String userPwd) {
        this.userPwd = userPwd;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Timestamp getRegDate() {
        return regDate;
    }

    public void setRegDate(Timestamp regDate) {
        this.regDate = regDate;
    }

    public Timestamp getUpDate() {
        return upDate;
    }

    public void setUpDate(Timestamp upDate) {
        this.upDate = upDate;
    }

    public Timestamp getDelDate() {
        return delDate;
    }

    public void setDelDate(Timestamp delDate) {
        this.delDate = delDate;
    }

    public String getProfileImg() {
        return profileImg;
    }

    public void setProfileImg(String profileImg) {
        this.profileImg = profileImg;
    }

    public char getStatus() {
        return status;
    }

    public void setStatus(char status) {
        this.status = status;
    }

}
