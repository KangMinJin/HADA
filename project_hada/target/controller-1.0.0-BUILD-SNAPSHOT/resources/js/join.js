
function chkId() {
    const id = document.querySelector("#userName");
    const idSpan = document.querySelector("#errMsgId");

    const url="/api/user?id=" + id.value;

    // 빈 문자열 서버로 넘어가는것 방지
    if (id.value === "") {
        idSpan.innerHTML = "";
        idSpan.removeAttribute('style');
        idSpan.innerHTML = "아이디를 입력해주세요.";
        return false; // 빈 문자열('')도 그냥 서버로 값이 넘어가기때문에 return false 해줘서 서버로 전송 못 하게 한다!
    }

    if (id.value.length < 5 || id.value.length > 12 ) {
        idSpan.innerHTML = "";
        idSpan.removeAttribute('style');
        idSpan.innerHTML = "아이디는 5~12글자로 입력해주세요.";
        return false;
    }

    // TODO : onchange로 실시간 유효성 검사!
    // API
    fetch(url)
        .then(data => {
            if (data.status !== 200) {
                throw new Error(data.status + ' : API Response Error');
            }
            return data.json();
        })
        .then(apiData => {
            if (apiData["flg"] === "1") {
                idSpan.innerHTML = "";
                idSpan.removeAttribute('style');
                idSpan.innerHTML = apiData["msg"];
            } else {
                // * 영어대소문자, 숫자, '_' 정규식 ('^'가 붙으면 부정 -> 영어대소문자, 숫자, _ 이외의 문자가 들어가면 체크된다!)
                const pattern = new RegExp ("^[a-zA-Z0-9\_]{5,12}$");

                if (!pattern.test(id.value)) {
                    idSpan.innerHTML = "";
                    idSpan.removeAttribute('style');
                    idSpan.innerHTML = "아이디는 영어 대소문자, 숫자, _ 만 사용할 수 있습니다.";
                    return false;
                }

                idSpan.innerHTML = "";
                idSpan.innerHTML = apiData["msg"];
                idSpan.style.color = '#000'; // 에러메세지가 아니므로 색깔을 #000 으로 줌.
            }
        });



}

function chkPw() {
    const pw = document.querySelector("#pw");
    const pwSpan = document.querySelector("#errMsgPw");

    // * 영어대소문자, 숫자, 특수문자가 각각 하나씩 들어가고 길이가 8~20이어야하는 정규식
    const pwPattern = new RegExp("^(?=.*[a-z]{1})(?=.*[A-Z]{1})(?=.*[\`\~\!\@\#\$\%\^\&\*\(\)\+\=\-\_]{1})(?=.*[0-9]{1}).{8,20}$");
    // * 정규식 내의 특수문자는 '\'를 넣어주면 문자열 그대로 사용 할 수 있다. 그리고 혹시모를 오류 방지하기 위해서도 '\'사용!

    if (pw.value === "") {
        pwSpan.innerHTML = "";
        pwSpan.innerHTML = "비밀번호를 입력해주세요.";
        return false; // 빈 문자열('')도 그냥 서버로 값이 넘어가기때문에 return false 해줘서 서버로 전송 못 하게 한다!
    }

    if (pw.value.length < 8 || pw.value.length > 20 ) {
        pwSpan.innerHTML = "";
        pwSpan.innerHTML = "비밀번호는 8~20글자로 입력해 주세요.";
        return false;
    }

    if (!pwPattern.test(pw.value)) {
        pwSpan.innerHTML = "";
        pwSpan.innerHTML = "비밀번호는 영어 대소문자, 숫자, 특수문자를<br>각각 하나 이상 사용하여 작성해주세요.";
        return false;
    } else {
        pwSpan.innerHTML = "";
    }
}

function chkSamePw() {
    const pw = document.querySelector("#pw");
    const pwChk = document.querySelector("#pwChk");

    const pwChkSpan = document.querySelector("#errMsgPwChk");

    if (pwChk.value === "") {
        pwChkSpan.innerHTML = "";
        pwChkSpan.removeAttribute('style');
        pwChkSpan.innerHTML = "비밀번호를 다시 입력해주세요.";
        return false; // 빈 문자열('')도 그냥 서버로 값이 넘어가기때문에 return false 해줘서 서버로 전송 못 하게 한다!
    }

    if (pwChk.value === pw.value) {
        pwChkSpan.innerHTML = "";
        pwChkSpan.style.color = '#000';
        pwChkSpan.innerHTML = "비밀번호가 일치합니다."
    } else {
        pwChkSpan.innerHTML = "";
        pwChkSpan.removeAttribute('style');
        pwChkSpan.innerHTML = "비밀번호가 일치하지 않습니다."
    }
}

function chkName() {
    const name = document.querySelector("#name");
    const nameSpan = document.querySelector("#errMsgName");

    const namePattern = new RegExp("^[a-zA-Z가-힣]{1,30}$");

    if (name.value === "") {
        nameSpan.innerHTML = "";
        nameSpan.innerHTML = "이름을 입력해주세요.";
        return false; // 빈 문자열('')도 그냥 서버로 값이 넘어가기때문에 return false 해줘서 서버로 전송 못 하게 한다!
    }

    if (!namePattern.test(name.value)) {
        nameSpan.innerHTML = "";
        nameSpan.innerHTML = "이름은 한글 혹은 영문으로만 입력해주세요.";
    } else {
        nameSpan.innerHTML = "";
    }

}

function chkOriginPw() {
    const originPw = document.querySelector("#originPw");
    const originPwSpan = document.querySelector("#errMsgOriginPw");

    if (originPw.value === "") {
        originPwSpan.innerHTML = "";
        originPwSpan.innerHTML = "비밀번호를 입력해주세요.";
        return false;
    } else {
        originPwSpan.innerHTML = "";
    }
}

// 이건 모든 값이 옳게 들어갔을때만 submit 활성화하려고 했다가 포기했어요...
// function registChk() {
//     const id = document.querySelector("#id");
//     const pw = document.querySelector("#pw");
//     const pwChk = document.querySelector("#pwChk");
//     const name = document.querySelector("#name");

//     const btn1 = document.querySelector("#btn1");

//     const url="/api/user?id=" + id.value;

//     const idSpan = document.querySelector("#errMsgId");
//     const pwSpan = document.querySelector("#errMsgPw");
//     const pwChkSpan = document.querySelector("#errMsgPwChk");
//     const nameSpan = document.querySelector("#errMsgName");

//     let idFlg = false;
//     let pwFlg = false;
//     let pwchkFlg = false;
//     let nameFlg = false;

//     // * 영어대소문자, 숫자, '_' 정규식 ('^'가 붙으면 부정 -> 영어대소문자, 숫자, _ 이외의 문자가 들어가면 체크된다!)
//     const pattern = new RegExp ("^[a-zA-Z0-9_]{5,12}$");
//     // * 영어대소문자, 숫자, 특수문자가 각각 하나씩 들어가고 길이가 8~20이어야하는 정규식
//     const pwPattern = new RegExp("^(?=.*[a-z]{1})(?=.*[A-Z]{1})(?=.*[\`\~\!\@\#\$\%\^\&\*\(\)\+\=\-]{1})(?=.*[0-9]{1}).{8,20}$");
//     // * 정규식 내의 특수문자는 '\'를 넣어주면 문자열 그대로 사용 할 수 있다. 그리고 혹시모를 오류 방지하기 위해서도 '\'사용!
//     const namePattern = new RegExp("^[가-힣]{1,30}$");
//     // 빈 문자열 서버로 넘어가는것 방지


//     if (idFlg === false) {
//         if (id.value === "") {
//             btn1.removeAttribute("style");
//             btn1.disabled = true;
//             idSpan.innerHTML = "";
//             idSpan.removeAttribute('style');
//             idSpan.innerHTML = "아이디를 입력해주세요.";
//             id.focus();
//             return false; // 빈 문자열('')도 그냥 서버로 값이 넘어가기때문에 return false 해줘서 서버로 전송 못 하게 한다!
//         }

//         if (id.value.length < 5 || id.value.length > 12 ) {
//             btn1.removeAttribute("style");
//             btn1.disabled = true;
//             idSpan.innerHTML = "";
//             idSpan.removeAttribute('style');
//             idSpan.innerHTML = "아이디는 5~12글자로 입력해주세요.";
//             id.focus();
//             return false;
//         }

//         // TODO : onchange로 실시간 유효성 검사!
//         // API
//         fetch(url)
//         .then(data => {
//             if (data.status !== 200) {
//                 throw new Error(data.status + ' : API Response Error');
//             }
//             return data.json();
//         })
//         .then(apiData => {
//             console.log(apiData);
//             if (apiData["flg"] === "1") {
//                 btn1.removeAttribute("style");
//                 btn1.disabled = true;
//                 idSpan.innerHTML = "";
//                 idSpan.removeAttribute('style');
//                 idSpan.innerHTML = apiData["msg"];
//             } else {


//                 if (!pattern.test(id.value)) {
//                     btn1.removeAttribute("style");
//                     btn1.disabled = true;
//                     idSpan.innerHTML = "";
//                     idSpan.removeAttribute('style');
//                     idSpan.innerHTML = "아이디는 영어 대소문자, 숫자, _ 만 사용할 수 있습니다.";
//                     return false;
//                 }
//                 btn1.removeAttribute("style");
//                 btn1.disabled = true;
//                 idSpan.innerHTML = "";
//                 idSpan.innerHTML = apiData["msg"];
//                 idSpan.style.color = '#000'; // 에러메세지가 아니므로 색깔을 #000 으로 줌.
//                 idFlg = true;
//             }
//         });
//     }

//     if (pwFlg === false) {
//         if (pw.value === "") {
//             btn1.removeAttribute("style");
//             btn1.disabled = true;
//             pwSpan.innerHTML = "";
//             pwSpan.innerHTML = "비밀번호를 입력해주세요.";
//             pw.focus();
//             return false; // 빈 문자열('')도 그냥 서버로 값이 넘어가기때문에 return false 해줘서 서버로 전송 못 하게 한다!
//         }

//         if (pw.value.length < 8 || pw.value.length > 20 ) {
//             btn1.removeAttribute("style");
//             btn1.disabled = true;
//             pwSpan.innerHTML = "";
//             pwSpan.innerHTML = "비밀번호는 8~20글자로 입력해 주세요.";
//             return false;
//         }

//         if (!pwPattern.test(pw.value)) {
//             btn1.removeAttribute("style");
//             btn1.disabled = true;
//             pwSpan.innerHTML = "";
//             pwSpan.innerHTML = "비밀번호는 영어 대소문자, 숫자, 특수문자를<br>각각 하나 이상 사용하여 작성해주세요.";
//             return false;
//         } else {
//             btn1.removeAttribute("style");
//             btn1.disabled = true;
//             pwSpan.innerHTML = "";
//             pwFlg = true;
//         }
//     }


//     if (pwchkFlg  === false) {
//         if (pwChk.value === "") {
//             btn1.removeAttribute("style");
//             btn1.disabled = true;
//             pwChkSpan.innerHTML = "";
//             pwChkSpan.removeAttribute('style');
//             pwChkSpan.innerHTML = "비밀번호를 다시 입력해주세요.";
//             pwChk.focus();
//             return false; // 빈 문자열('')도 그냥 서버로 값이 넘어가기때문에 return false 해줘서 서버로 전송 못 하게 한다!
//         }
//         if (pwChk.value === pw.value) {
//             btn1.removeAttribute("style");
//             btn1.disabled = true;
//             pwChkSpan.innerHTML = "";
//             pwChkSpan.style.color = '#000';
//             pwChkSpan.innerHTML = "비밀번호가 일치합니다."
//             pwchkFlg = true
//         } else {
//             btn1.removeAttribute("style");
//             btn1.disabled = true;
//             pwChkSpan.innerHTML = "";
//             pwChkSpan.removeAttribute('style');
//             pwChkSpan.innerHTML = "비밀번호가 일치하지 않습니다."
//             pwChk.focus();
//         }
//     }
//     if (nameFlg  === false) {
//         if (name.value === "") {
//             btn1.removeAttribute("style");
//             btn1.disabled = true;
//             nameSpan.innerHTML = "";
//             nameSpan.innerHTML = "이름을 입력해주세요.";
//             name.focus();
//             return false; // 빈 문자열('')도 그냥 서버로 값이 넘어가기때문에 return false 해줘서 서버로 전송 못 하게 한다!
//         }

//         if (!namePattern.test(name.value)) {
//             btn1.removeAttribute("style");
//             btn1.disabled = true;
//             nameSpan.innerHTML = "";
//             nameSpan.innerHTML = "이름은 한글로만 입력해주세요.";
//             name.focus();
//         } else {
//             btn1.removeAttribute("style");
//             btn1.disabled = true;
//             nameSpan.innerHTML = "";
//             nameFlg = true;
//         }
//     }

//     if (idFlg === true && pwFlg === true && pwchkFlg === true && nameFlg === true) {
//         btn1.disabled = false;
//         btn1.style.backgroundColor = "#00d1ff";
//     }
// }