Team Space
==========

### Dev Diary 160813 by blinder ###

**1. 참고링크**
 - [Redux Doc](http://dobbit.github.io/redux/)
 - [Redux 초기 sample code](http://velopert.com/1266)
 - [React & redux & firebase](http://hwanmin.tistory.com/2506)
 - [blinder TeamSpace Github](https://github.com/Blinders/TeamSpace_Blinder)
 - [Markdown 문법_1](https://gist.github.com/ihoneymon/652be052a0727ad59601)
 - [Markdown 문법_2](http://blog.kalkin7.com/2014/02/10/lets-write-using-markdown/)
 - [React & Redux Github](https://github.com/reactjs/redux)
 - [React Skeleton Github](https://github.com/velopert/react-skeleton)
 - [Babel ECMAScript 2015](https://blog.outsider.ne.kr/1176)
 - [Material Icon](https://design.google.com/icons/)

**2. 기록**
 - 12시 50분
 > 어그적대다가 슬슬 해볼까 싶어서 싶어서 일지 작성 시작.</br>
   (물론 최근 읽고 있는 마션의 영향이 크다는 느낌은 지울 수 없음)</br>
   앞으로 1시간 단위로 일지 기록 예정.</br>
   지금 하려는 건 위 상단 Redux 초기 Sample Code 페이지에</br>
   있는 Sample Code를 그대로 따라할 예정.</br>
   현재 진척상황은 Github에 새 Repository를 만들고 first commit을 해놓은 상태.

 - 1시 40분
 > ..아,씨 예제 그대로 따라 했는데 하면이 백지다. 아무것도 안 나온다</br>
   element id가 예제는 app이고 난 root길래 root로 일치시켜줬는데도 안 나온다, 왜지?</br>


- 2시 10분
 > action과 reducer를 반대로 코드 작성함..에러 정정하니 카운터 웹까지 나옴</br>
   이제 이걸 변형해서 bootstrap든 material이든 넣을 예정</br>

- 2시 48분
 > bootstrap 설치를 npm install react-bootstrap --save 로 해보려고 했는데</br>
   설치하고 경로 지정하고 UI 적용하니 아무리 해도 안 먹는다..그래서 그냥 CDN해버림</br>
   그러고 나서 components폴더에 Header랑 Footer 생성</br>

- 6시 35분
> 4시 쯤? 눈을 뜨니 내가 고개 떨구고 자고 있더라. 그래서 그냥 잠.</br>
  근데 망할 알람이 날 6시에 깨움, 심지어 블루투스 스피커로 음악 틀어놨었는데</br>
  스피커로 알람송이 울림, 더러게 큼. 웃긴게 핸드폰+스피커가 동시에 음악을 틈</br>
  본의 아니게 2.1채널 서라운드 알람과 함께 일어남.</br>
  여튼 그래서 잠들기 전에 하던 material-ui 적용해보려 용썼는데</br>
  도대체가 알 수 없는 오류가 발생함, muitheme가 어쩌고 저쩌고</br>
  멀쩡한 button이나 pre어쩌고 알 수 없다고. 와씨 뭐지 하고 한참 찾다가</br>
  Material react 0.15 이상 버전부턴 baseThemes를 import해야한 다는 걸 30분만에 찾음..</br>
  그래서 최상위 App.js에 해당 라이브러리(?) import하고 나니 잘 나옴..</br>

- 오전 9시
> ES6에서 '=>' 이 형태나 '함수명 = ()'을 사용하려면 webpack presets에 stage-1을 추가하고</br>
  npm install --save-dev babel-preset-stage-1 을 해줘야 한다</br>
  이게 ES문법 사용자같은 거라는데 stage-N의 N은 스테이블, 개발중 뭐 다양하다고 한다.

- 오후 3시.
> Dropdown이랑 Tab..Seleted등 터치 이벤트다 동작을 안함.</br>
  분명 onClick 이벤트는 먹는데(console로 찍어봄) 핵심 동작이 안 됨</br>
  (Dropdown이랑 Seleted는 메뉴가 안 열리고 Tab은 전환이 안 됨)</br>
  그래서 10시쯤 다 때려치고 그냥 잠. 잘 자다가 Dialog에 쓰던 state.open이 떠오르면서</br>
  눈이 떠졌더니 대략 2시쯤임. 희망을 가지고 state.open을 변형해봄</br>
  ...헛된 희망이었음-_-...빡침</br>
  폭풍 검색을 시작함. 근데 자기 전에 봤던 것들이랑 검색결과가 다를게 없음..</br>
  그러다 npm install log를 봤는데, support react 15.0 어쩌고 메시지를 봄</br>
  어? 하고 package.json을 열음. 내 react version이 0.14였음</br>
  ...와,씨 이래서 아무 Starter kit이나 쓰면 안 됨...원시시대 Version으로</br>
  최신 Effect반영하려니 될리가 있나 ㅅㅂ.....</br>
  package.json 에서 version 강제 명시하고 npm install 함.</br>
  Touch, click...6시간 넘게 날 옥죄고 있던 것들이 잘ㅋ됨ㅋ</br>
  6시간의 깨달음 : module version은 최신으로 쓰자..ㅠㅠㅠㅠ</br>

- 오후 5시 55분
> Login Form 까지 완성..Main Theme Color는 일단 내 멋대로 #2196F3 로 맞춤</br>
  이거 나중에 공통 Value로 빼는 거 좀 찾아봐야 겠음..</br>
  좌상단 홈 버튼도 전체 페이지 링크라서 나중에 Body만 변하게 Routing 필요함</br>
  Login Form Style을 state로 지정해서 Register now 누르면 Login Form Paper 크기만</br>
  변해서 가입할 수 있으면 편할 거 같은데...</br>
  일단 Login Form 만들었으니 Commit & Push. 카카오 연동은 나중에...</br>

- 오후 8시
> kakao 인증 모듈 적용완료</br>
  홈페이지에 가이드 나온 부분이 일반 Javascript로 해놓은 거라서</br>
  ES6 문법 적용된 React에는 어떻게 해야하나,,하고 한참 해맸는데</br>
  일단 기본적으로 index.html에 kakao SDK CDN으로 잡아주고</br>
  해당 API를 사용할 loginForm.js 에 관련 메소드를 불러주고 버튼에 이벤트로 넣어버림</br>
  사실 내가 원했던 건 우리 input에 ID랑 PW넣고 kakao로 보내서 인증받는 거였는데</br>
  역시 그렇게까진 열어놓진 않았음..그래서 Popup으로 대체</br>
