## [ 개인 프로젝트 ] Songny

 ****

![송니](https://user-images.githubusercontent.com/88178866/143570324-d33bf372-05d3-462f-b65d-b50838bf8ae0.PNG)


> **PLAY HAS NO LIMITS!**
> 

**플레이스테이션 사이트에서 영감을 얻은 사이트입니다!**

**자유게시판, 마켓, 마이페이지를 구현한 웹 페이지 입니다!**

**( 📎 [songny.me](https://songny.me) |😺  [깃허브 링크](https://github.com/SongNoin/codecamp-03/tree/master/freeboard_frontend)|  회고 링크 )**

**[ 개인프로젝트, 프론트엔드 ] Next.js , React** 

**프로젝트 기간** : 2021.09 ~ 2021.10 ( 약 7주 )

---

### 메인 & 레이아웃

- 메인 페이지
    - 그라데이션 css 적용
    
- 레이아웃 컴포넌트를 만들어서 레이아웃 설정
    - 로그아웃 기능 구현
    - 로그인 유무에 따른 헤더 레이아웃 메뉴 전환
    - 페이지에 따른 레이아웃 변경
    - 배너 레이아웃에 `react-slick` 라이브러리를 이용해 이미지 캐러셀 적용
    
- GlobalStyle 적용
    - Global 폰트 적용

### **자유게시판**

- 게시판 리스트 페이지
    - `map`을 이용한 게시판 리스트 구현( ✏[링크](https://velog.io/@as5427072/210907-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-7%EC%9D%BC%EC%B0%A8))
    - 페이지 네이션 기능 구현 ( ✏[링크](https://velog.io/@as5427072/210918-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-14%EC%9D%BC%EC%B0%A8))
    - `debounce` 기능을 이용한 fetch를 최소화한 검색기능 구현 ( ✏[링크](https://velog.io/@as5427072/210930-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-21%EC%9D%BC%EC%B0%A8))
    
- 게시판 글쓰기 페이지
    - 글쓰기 기능 구현 ( ✏[링크](https://velog.io/@as5427072/210902-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-4%EC%9D%BC%EC%B0%A8))
    - 글쓰기 컴포넌트 재 사용으로 글 수정 기능 구현 ( ✏[링크](https://velog.io/@as5427072/210908-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-8%EC%9D%BC%EC%B0%A8))
    - 이미지 업로드 기능 구현 ( ✏[링크](https://velog.io/@as5427072/210930-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-1920%EC%9D%BC%EC%B0%A8))
    - 카카오 `Postcode API`  를 이용한 주소 검색 기능 구현 ( ✏[링크](https://velog.io/@as5427072/210914-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-12%EC%9D%BC%EC%B0%A8))
    - `React-Player` 라이브러리를 이용한 유튜브 링크 업로드 구현( ✏[링크](https://velog.io/@as5427072/210913-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-11%EC%9D%BC%EC%B0%A8))
    
- 게시판 상세페이지
    - 동적라우팅을 이용한 게시글 고유 id 이동 구현( ✏[링크](https://velog.io/@as5427072/210903-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-5%EC%9D%BC%EC%B0%A8))
    - 게시글 삭제 , 좋아요 & 싫어요 기능 구현
    - `AntDesign`의 tooltip 을 이용한 주소 표시 적용
    - 버튼 그라데이션 css 적용 및 컴포넌트화
    
- 댓글 컴포넌트
    - `AntDesign`의 별점 라이브러리를 이용한 별점시스템 적용 ( ✏[링크](https://velog.io/@as5427072/210913-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-11%EC%9D%BC%EC%B0%A8))
    - 댓글 쓰기컴포넌트를 이용한 댓글 수정 기능 구현, 댓글 삭제 기능 구현
    - `react-infinite-scroller` 라이브러리를 이용한 무한스크롤 구현 ( ✏[링크](https://velog.io/@as5427072/210919-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-15%EC%9D%BC%EC%B0%A8))
    

### **중고마켓**

- 로그인 페이지
    - `Context API` 를 통한 로그인 구현
        
        (`AccessToken`, `RefreshToken`) (✏ [Login 링크](https://velog.io/@as5427072/211005-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-23%EC%9D%BC%EC%B0%A8)) (✏ [ResfreshToken 링크](https://velog.io/@as5427072/211019-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-32%EC%9D%BC%EC%B0%A8))
        
    - `Hof` 와 `AccessToken` 이용해 권한분기 (✏ [링크](https://velog.io/@as5427072/211006-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-24%EC%9D%BC%EC%B0%A8))
    - `AntDesign` 의 모달 라이브러리를 이용해서 모달 창으로 띄우기 (✏ [링크](https://velog.io/@as5427072/211001-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-22%EC%9D%BC%EC%B0%A8))
    - Input 컴포넌트 화
- 회원가입 페이지
    - 정규표현식을 이용해서 이메일 형식 검사 (✏ [링크](https://velog.io/@as5427072/211001-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-22%EC%9D%BC%EC%B0%A8))
- 메인 페이지 기능 구현
    - `react-infinite-scroller` 라이브러리를 이용한 무한스크롤 구현 (✏ [링크](https://velog.io/@as5427072/210919-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-15%EC%9D%BC%EC%B0%A8))
    - 베스트상품 구현
    - 최근 본 상품의 Id를 로컬 스토리지에 저장해 최근 본 상품 리스트 구현 (✏ [링크](https://velog.io/@as5427072/211012-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-27%EC%9D%BC%EC%B0%A8))
- 상품 등록 페이지
    - `useForm` 과 `yupResolver` 을 이용한 검증과 등록기능 구현 (✏ [링크](https://velog.io/@as5427072/211007-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-25%EC%9D%BC%EC%B0%A8))
    - `React-Quill`를 사용해 웹 에디터 구현 (✏ [링크](https://velog.io/@as5427072/211013-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-28%EC%9D%BC%EC%B0%A8))
    - `Kakao-map API` 를 이용한 맵 마커 기능 (마커 찍은 주소자동입력) 구현 (✏ [링크](https://velog.io/@as5427072/211014-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-29%EC%9D%BC%EC%B0%A8))
    - 이미지 업로드 기능 구현 ( ✏[링크](https://velog.io/@as5427072/210930-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-1920%EC%9D%BC%EC%B0%A8))
- 상품 상세 페이지
    - `Kakao-map API` 를 이용해 작성자 위치 맵으로 조회 기능(✏ [링크](https://velog.io/@as5427072/211014-%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84-29%EC%9D%BC%EC%B0%A8))
    - 상품 구매, 삭제 기능 구현
    - 상품등록 컴포넌트를 이용한 상품 수정 기능 구현
- 댓글, 대댓글 컴포넌트
    - 댓글, 대댓글 CRUD 기능 구현
    

### 마이페이지

- 충전하기 기능 구현
    - `아임포트 API`를 이용해 원하는 금액의 포인트 충전 구현
- 내 장터 조회 기능 구현
    - 나의 상품, 마이찜, 구매목록을 `Graphql-API` 이용해 구현
- 내 포인트 페이지 기능 구현
    - 포인트 충전내역, 구매내역, 판매내역을 `Graphql-API`을 이용해 구현
- 비밀번호,  닉네임, 프로필 사진 수정 구현
