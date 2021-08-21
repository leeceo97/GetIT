import axios from 'axios';
import { all, fork } from 'redux-saga/effects';

import userSaga from './user';

// axios 요청 기본 주소
axios.defaults.baseURL = process.env.REACT_APP_SERVER_BASE_URL;
// cookie 전송을 위한 설정
// axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga)]);
}