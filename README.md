추가기능1:웹페이지에 유튜브 영상 삽입해서 사이트 내에서 영상시청 가능하게함(기존의 사진은 왼쪽에두고 오른쪽엔 영상)(저작권 가능한것만 넣어서 롤공식 영상은 못넣었습니다ㅜ)
추가기능2: 롤전적검색사이트로 이동가능한 하이퍼링크달기
안됐던것
로그아웃 눌렀을때 세션값도 뜨고 다른것도 다 되고 화면도 넘어가긴했는데
만들어놓은 가입완료 화면이아닌 이문구(Cannot GET /login/index_join.html  )
만 계속 뜬 부분은 join.js에서 index.html만 써있던부분은form.action = "../login/join_end.html";로 수정하니까 해결 되었습니다!!
그리고 로그아웃 눌렀을때 세션 삭제가 안된 부분은session.js에다가
document.getElementById("logout_btn").addEventListener('click', logout);코드를 추가하니까 해결 됐습니다!!!
그리고  로그아웃 화면 안만들었던것도 만들었습니다. (로그아웃 누르면 어라? 벌써 끄신다고요?? 화면의 로고를 클릭하면 로그아웃됩니다.
라는화면 뜨고 우는 벌꿀 사진 누르면 다시 메인화면으로 돌아오게 했습니다. 안된거 다 해결완료)
 
