var idFlg = false;
var pwFlg = false;
var pwSameFlg = false;
var mailFlg = false;
var userNameFlg = false;

$(document).ready(function () {
    $(".regist-btn").click(function () {
        /* 입력값 변수 */
        var id = $('#userId').val();				// id입력란
        var pw = $('#userPwd').val();				// 비밀번호 입력란
        var pwck = $('#userPwdChk').val();			// 비밀번호 확인 입력란
        var mail = $('#userMail').val();			// 이메일 입력란
        var name = $('#userName').val();			// 이름 입력란
        // $("#join-form").attr("action", "/hada/user/join");
        // $("#join-form").submit();
    //아이디 중복검사
    $('#userId').on("blur", function() {

        var userId = $('#userId').val();
        var data = { userId : userId }
        var regex = /^[a-zA-Z0-9_-]{5,20}$/;

        if (regex.test(userId)) {

            $(".errMsgId").html("");

            $.ajax({
                type : "post",
                url : "/hada/user/userIdChk",
                data : data,
                success : function(result) {
                    // console.log("성공 여부 = " + result);
                    if (result != 'fail') {

                        $("#userId").removeClass("err");
                        $(".errMsgId").css("color", "black");
                        $(".errMsgId").html("사용가능한 아이디입니다.");
                        idFlg = true;

                    } else {

                        $("#userId").addClass("err");
                        $(".errMsgId").css("color","red");
                        $(".errMsgId").html("사용할 수 없는 아이디입니다.");
                        idFlg = false;

                    }
                }

            });
        } else {

            $(".errMsgId").css("color","red");
            $(".errMsgId").html("5~20자의 영문, 숫자와 특수기호(_),(-)만 입력해 주세요.");
            $("#userId").addClass("err");
            idFlg = false;

        }
    });

    //비밀번호 체크
    $('#userPwd').on("blur", function () {

        var userPwd = $('#userPwd').val();
        var regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

        if (regex.test(userPwd)) {

            $("#userPwd").removeClass("err");
            $(".errMsgPwd").html("");
            pwFlg = true;

        } else {

            $("#userPwd").addClass("err");
            $(".errMsgPwd").html("8~20자의 영문, 숫자와 특수기호(@,$,!,%,*,?,&)만 입력해 주세요.");
            pwFlg = false;

        }
    });

    //비밀번호 재입력 체크
    $('#userPwdChk').on("blur", function () {

        var userPwdChk = $('#userPwdChk').val();
        var userPwd = $('#userPwd').val();

        if (userPwdChk !== "") {

            if (userPwdChk !== userPwd) {
                $("#userPwdChk").addClass("err");
                $(".errMsgPwdChk").css("color","red");
                $(".errMsgPwdChk").html("비밀번호가 일치하지 않습니다.");
                pwSameFlg = false;

            } else {

                $("#userPwdChk").removeClass("err");
                $(".errMsgPwdChk").css("color", "black");
                $(".errMsgPwdChk").html("비밀번호가 일치합니다.");
                pwSameFlg = true;

            }
        }
    });

    // 이메일 체크
    $("#userMail").on("blur", function () {

        var userMail = $("#userMail").val();
        var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        var data = { userMail : userMail }

        if (regex.test(userMail)) {
            $.ajax({

                type : "post",
                url : "/hada/user/userMailChk",
                data : data,
                success : function(result) {
                    // console.log("성공 여부 = " + result);
                    if (result != 'fail') {

                        $("#userMail").removeClass("err");
                        $(".errMsgEmail").css("color", "black");
                        $(".errMsgEmail").html("사용가능한 이메일입니다.");
                        mailFlg = true;

                    } else {

                        $("#userMail").addClass("err");
                        $(".errMsgEmail").css("color","red");
                        $(".errMsgEmail").html("사용중인 이메일 입니다.");
                        mailFlg = false;

                    }
                }
            });
        } else {

            $("#userMail").addClass("err");
            $(".errMsgEmail").css("color", "red");
            $(".errMsgEmail").html("올바른 이메일을 입력해주세요.");
            mailFlg = false;

        }
    });

    //닉네임 체크
    $('#userName').on("blur", function () {

        var userName = $('#userName').val();

        if (userName.length < 1 || userName.length > 20) {

            $("#userName").addClass("err")
            $(".errMsgUserName").html("닉네임은 1글자 이상 입력해 주세요.");
            userNameFlg = false;

        } else {

            $("#userName").removeClass("err");
            $(".errMsgUserName").html("");
            userNameFlg = true;

        }
    });

    // 최종 유효성 검사
    if (idFlg && pwFlg && pwSameFlg && mailFlg && userNameFlg) {
        $("#join-form").attr("action", "/hada/user/join");
        $("#join-form").submit();
    }
    return false;
    });
});

