package com.hada.model;

import java.sql.Timestamp;

public class Todo {
    private int id;
    private String title;
    private String content;
    private char status;
    private char open;
    private Timestamp createDate;
    private Timestamp upDate;
    private Timestamp delDate;
    private Timestamp startDate;
    private Timestamp endDate;
//    private Timestamp alertDate;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public char getStatus() {
        return status;
    }

    public void setStatus(char status) {
        this.status = status;
    }

    public char getOpen() {
        return open;
    }

    public void setOpen(char open) {
        this.open = open;
    }

    public Timestamp getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Timestamp createDate) {
        this.createDate = createDate;
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

    public Timestamp getStartDate() {
        return startDate;
    }

    public void setStartDate(Timestamp startDate) {
        this.startDate = startDate;
    }

    public Timestamp getEndDate() {
        return endDate;
    }

    public void setEndDate(Timestamp endDate) {
        this.endDate = endDate;
    }
}
