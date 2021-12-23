// 로그인
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

// 로그아웃
export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';

// 사용자 프로필 정보 받아오기
export const USER_PROFILE_REQUEST = 'USER_PROFILE_REQUEST';
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';
export const USER_PROFILE_FAILURE = 'USER_PROFILE_FAILURE';

// 사용자 프로필 수정하기
export const USER_PROFILE_EDIT_REQUEST = 'USER_PROFILE_EDIT_REQUEST';
export const USER_PROFILE_EDIT_SUCCESS = 'USER_PROFILE_EDIT_SUCCESS';
export const USER_PROFILE_EDIT_FAILURE = 'USER_PROFILE_EDIT_FAILURE';

// 닉네임 중복 확인
export const USER_NICK_DOUBLECHECK_REQUEST = 'USER_NICK_DOUBLECHECK_REQUEST';
export const USER_NICK_DOUBLECHECK_SUCCESS = 'USER_NICK_DOUBLECHECK_SUCCESS';
export const USER_NICK_DOUBLECHECK_FAILURE = 'USER_NICK_DOUBLECHECK_FAILURE';

// 회원가입 닉네임 중복 체크 초기화
export const USER_NICK_DOUBLECHECK_RESET = 'USER_NICK_DOUBLECHECK_RESET';

// 회원가입 프로필 등록
export const USER_PROFILE_REGISTER_REQUEST = 'USER_PROFILE_REGISTER_REQUEST';
export const USER_PROFILE_REGISTER_SUCCESS = 'USER_PROFILE_REGISTER_SUCCESS';
export const USER_PROFILE_REGISTER_FAILURE = 'USER_PROFILE_REGISTER_FAILURE';

// 회원가입 초기화
export const USER_REGISTER_RESET = 'USER_REGISTER_RESET';

// 회원가입시 id 정보 업데이트
export const USER_ID_UPDATE = 'USER_ID_UPDATE';

// 질문/자유게시판  받아오기
export const COMMON_POST_LIST_REQUEST = 'COMMON_POST_LIST_REQUEST';
export const COMMON_POST_LIST_SUCCESS = 'COMMON_POST_LIST_SUCCESS';
export const COMMON_POST_LIST_FAILURE = 'COMMON_POST_LIST_FAILURE';

// 질문/자유게시판 필터링 상태(조건) 초기화
export const FILTER_STATUS_RESET = 'FILTER_STATUS_RESET';

// 질문/자유게시판 필터링 상태(조건) 업데이트
export const FILTER_STATUS_UPDATE = 'FILTER_STATUS_UPDATE';

// 질문/자유게시판 글 등록하기
export const COMMON_POST_REGISTER_REQUEST = 'COMMON_POST_REGISTER_REQUEST';
export const COMMON_POST_REGISTER_SUCCESS = 'COMMON_POST_REGISTER_SUCCESS';
export const COMMON_POST_REGISTER_FAILURE = 'COMMON_POST_REGISTER_FAILURE';

// 질문/자유게시판 글 가져오기
export const COMMON_POST_REQUEST = 'COMMON_POST_REQUEST';
export const COMMON_POST_SUCCESS = 'COMMON_POST_SUCCESS';
export const COMMON_POST_FAILURE = 'COMMON_POST_FAILURE';

// 내가 쓴 게시글 가져오기
export const MY_POST_LIST_REQUEST = 'MY_POST_LIST_REQUEST';
export const MY_POST_LIST_SUCCESS = 'MY_POST_LIST_SUCCESS';
export const MY_POST_LIST_FAILURE = 'MY_POST_LIST_FAILURE';

// 질문/자유 게시판 게시글 좋아요
export const COMMON_POST_LIKE_REQUEST = 'COMMON_POST_LIKE_REQUEST';
export const COMMON_POST_LIKE_SUCCESS = 'COMMON_POST_LIKE_SUCCESS';
export const COMMON_POST_LIKE_FAILURE = 'COMMON_POST_LIKE_FAILURE';

// 모집 게시판 게시글 좋아요
export const RECRUIT_POST_LIKE_REQUEST = 'RECRUIT_POST_LIKE_REQUEST';
export const RECRUIT_POST_LIKE_SUCCESS = 'RECRUIT_POST_LIKE_SUCCESS';
export const RECRUIT_POST_LIKE_FAILURE = 'RECRUIT_POST_LIKE_FAILURE';

// 좋아요 누른 게시글(관심 있는 글) 리스트 가져오기
export const LIKED_POST_LIST_REQUEST = 'LIKED_POST_LIST_REQUEST';
export const LIKED_POST_LIST_SUCCESS = 'LIKED_POST_LIST_SUCCESS';
export const LIKED_POST_LIST_FAILURE = 'LIKED_POST_LIST_FAILURE';

// 게시글의 댓글 리스트 가져오기
export const COMMENT_LIST_REQUEST = 'COMMENT_LIST_REQUEST';
export const COMMENT_LIST_SUCCESS = 'COMMENT_LIST_SUCCESS';
export const COMMENT_LIST_FAILURE = 'COMMENT_LIST_FAILURE';

// 댓글 작성하기
export const COMMENT_REGISTER_REQUEST = 'COMMENT_REGISTER_REQUEST';
export const COMMENT_REGISTER_SUCCESS = 'COMMENT_REGISTER_SUCCESS';
export const COMMENT_REGISTER_FAILURE = 'COMMENT_REGISTER_FAILURE';

// 내가 쓴 댓글 리스트 가져오기
export const MY_COMMENT_LIST_REQUEST = 'MY_COMMENT_LIST_REQUEST';
export const MY_COMMENT_LIST_SUCCESS = 'MY_COMMENT_LIST_SUCCESS';
export const MY_COMMENT_LIST_FAILURE = 'MY_COMMENT_LIST_FAILURE';

// 게시글 검색 결과 리스트 가져오기
export const SEARCH_POST_LIST_REQUEST = 'SEARCH_POST_LIST_REQUEST';
export const SEARCH_POST_LIST_SUCCESS = 'SEARCH_POST_LIST_SUCCESS';
export const SEARCH_POST_LIST_FAILURE = 'SEARCH_POST_LIST_FAILURE';

// 모집 게시글 리스트 받아오기
export const RECRUIT_POST_LIST_REQUEST = 'RECRUIT_POST_LIST_REQUEST';
export const RECRUIT_POST_LIST_SUCCESS = 'RECRUIT_POST_LIST_SUCCESS';
export const RECRUIT_POST_LIST_FAILURE = 'RECRUIT_POST_LIST_FAILURE';

// 모집 게시글 가져오기
export const RECRUIT_POST_REQUEST = 'RECRUIT_POST_REQUEST';
export const RECRUIT_POST_SUCCESS = 'RECRUIT_POST_SUCCESS';
export const RECRUIT_POST_FAILURE = 'RECRUIT_POST_FAILURE';

// 포트폴리오 리스트 받아오기
export const PORTFOLIO_LIST_REQUEST = 'PORTFOLIO_LIST_REQUEST';
export const PORTFOLIO_LIST_SUCCESS = 'PORTFOLIO_LIST_SUCCESS';
export const PORTFOLIO_LIST_FAILURE = 'PORTFOLIO_LIST_FAILURE';

// 포트폴리오 생성하기
export const PORTFOLIO_REGISTER_REQUEST = 'PORTFOLIO_REGISTER_REQUEST';
export const PORTFOLIO_REGISTER_SUCCESS = 'PORTFOLIO_REGISTER_SUCCESS';
export const PORTFOLIO_REGISTER_FAILURE = 'PORTFOLIO_REGISTER_FAILURE';

// 팀 프로필 생성
export const TEAM_PROFILE_REGISTER_REQUEST = 'TEAM_PROFILE_REGISTER_REQUEST';
export const TEAM_PROFILE_REGISTER_SUCCESS = 'TEAM_PROFILE_REGISTER_SUCCESS';
export const TEAM_PROFILE_REGISTER_FAILURE = 'TEAM_PROFILE_REGISTER_FAILURE';

// 팀 프로필 목록
export const TEAM_PROFILE_LIST_REQUEST = 'TEAM_PROFILE_LIST_REQUEST';
export const TEAM_PROFILE_LIST_SUCCESS = 'TEAM_PROFILE_LIST_SUCCESS';
export const TEAM_PROFILE_LIST_FAILURE = 'TEAM_PROFILE_LIST_FAILURE';

// 모집 게시글 작성
export const RECRUIT_POSTING_REQUEST = 'RECRUIT_POSTING_REQUEST';
export const RECRUIT_POSTING_SUCCESS = 'RECRUIT_POSTING_SUCCESS';
export const RECRUIT_POSTING_FAILURE = 'RECRUIT_POSTING_FAILURE';

// 팀 프로필 삭제
export const TEAM_PROFILE_REMOVE_REQUEST = 'TEAM_PROFILE_REMOVE_REQUEST';
export const TEAM_PROFILE_REMOVE_SUCCESS = 'TEAM_PROFILE_REMOVE_SUCCESS';
export const TEAM_PROFILE_REMOVE_FAILURE = 'TEAM_PROFILE_REMOVE_FAILURE';

// 팀 프로필 상세내용
export const TEAM_PROFILE_POST_DETAIL_REQUEST =
  'TEAM_PROFILE_POST_DETAIL_REQUEST';
export const TEAM_PROFILE_POST_DETAIL_SUCCESS =
  'TEAM_PROFILE_POST_DETAIL_SUCCESS';
export const TEAM_PROFILE_POST_DETAIL_FAILURE =
  'TEAM_PROFILE_POST_DETAIL_FAILURE';

// 프로필 메뉴 변경
export const MY_PROFILE_SELECT_MENU = 'MY_PROFILE_SELECT_MENU';
