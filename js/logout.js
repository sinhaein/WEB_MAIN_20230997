const check_xss = (input) => {
    // DOMPurify 라이브러리 로드 (CDN 사용)
    const DOMPurify = window.DOMPurify;
    // 입력 값을 DOMPurify로 sanitize
    const sanitizedInput = DOMPurify.sanitize(input);
    // Sanitized된 값과 원본 입력 값 비교
    if (sanitizedInput !== input) {
    // XSS 공격 가능성 발견 시 에러 처리
    alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
    return false;
    }
    // Sanitized된 값 반환
    return sanitizedInput;
    };

  
  function session_del() {//세션 삭제
    if (sessionStorage) {
        sessionStorage.removeItem("Session_Storage_id");
        sessionStorage.removeItem("Session_Storage_pass");
        alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
    } else {
        alert("세션 스토리지 지원 x");
    }
 }
  
  
  function encodeByAES256(key, data){
     const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
       iv: CryptoJS.enc.Utf8.parse(""),
       padding: CryptoJS.pad.Pkcs7,
       mode: CryptoJS.mode.CBC
     });
     return cipher.toString();
  }
  function decodeByAES256(key, data){
     const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
       iv: CryptoJS.enc.Utf8.parse(""),
       padding: CryptoJS.pad.Pkcs7,
       mode: CryptoJS.mode.CBC
     });
     return cipher.toString(CryptoJS.enc.Utf8);
  }
  
  function encrypt_text(password){
     const k = "key"; // 클라이언트 키
     const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
     const b = password;
     const eb = this.encodeByAES256(rk, b);
     return eb;
     console.log(eb);
  }
  function decrypt_text(){
     const k = "key"; // 서버의 키
     const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
     const eb = session_get();
     const b = this.decodeByAES256(rk, eb);
     console.log(b);
  }
  
  function init_logined(){
    if(sessionStorage){
        decrypt_text(); // 복호화 함수
    }
    else{
     alert("세션 스토리지 지원 x");
    } 
  }
  
  function logout(){
    session_del(); // 세션 삭제
    location.href='../index.html';
  }

  document.getElementById("logout_btn").addEventListener('click', check_input);
  