import produce from 'immer';
import { InitialState, UserActions } from './types';
import {
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
  USER_NICK_DOUBLECHECK_REQUEST,
  USER_NICK_DOUBLECHECK_SUCCESS,
  USER_NICK_DOUBLECHECK_FAILURE,
  USER_NICK_DOUBLECHECK_RESET,
} from './actions';

// 초기 상태
const initialState: InitialState = {
  id: {
    message: null,
    user_pk: null,
  },
  nickDoubleCheck: {
    duplicate: null,
  },
  profileInfo: null,
  portfolio: null,
  userInfoRequest: false,
  userInfoSuccess: false,
  userInfoFailure: null,
  userLogInRequest: false,
  userLogInSuccess: false,
  userLogInFailure: null,
  userLogOutRequest: false,
  userLogOutSuccess: false,
  userLogOutFailure: null,
  userProfileRequest: false,
  userProfileSuccess: false,
  userProfileFailure: null,
  userNickDoubleCheckRequest: false,
  userNickDoubleCheckSuccess: false,
  userNickDoubleCheckFailure: null,
  userNickDoubleCheckReset: false,
};

const reducer = (state = initialState, action: UserActions): InitialState =>
  produce(state, (draft) => {
    switch (action.type) {
      case USER_INFO_REQUEST:
        draft.userInfoRequest = true;
        draft.userInfoSuccess = false;
        draft.userInfoFailure = null;
        break;
      case USER_INFO_SUCCESS:
        draft.userInfoRequest = false;
        draft.userInfoSuccess = true;
        draft.userInfoFailure = null;
        draft.id = action.data;
        break;
      case USER_INFO_FAILURE:
        draft.userInfoRequest = false;
        draft.userInfoSuccess = false;
        draft.userInfoFailure = action.error;
        break;
      case USER_LOGIN_REQUEST:
        draft.userLogInRequest = true;
        draft.userLogInSuccess = false;
        draft.userLogInFailure = null;
        break;
      case USER_LOGIN_SUCCESS:
        draft.userLogOutRequest = false;
        draft.userLogOutSuccess = true;
        draft.userLogOutFailure = null;
        draft.id = action.data;
        break;
      case USER_LOGIN_FAILURE:
        draft.userLogOutRequest = false;
        draft.userLogOutSuccess = false;
        draft.userLogOutFailure = action.error;
        break;
      case USER_LOGOUT_REQUEST:
        draft.userLogOutRequest = true;
        draft.userLogOutSuccess = false;
        draft.userLogOutFailure = null;
        break;
      case USER_LOGOUT_SUCCESS:
        draft.userLogOutRequest = false;
        draft.userLogOutSuccess = true;
        draft.userLogOutFailure = null;
        draft.id = action.data;
        break;
      case USER_LOGOUT_FAILURE:
        draft.userLogOutRequest = false;
        draft.userLogOutSuccess = false;
        draft.userLogOutFailure = action.error;
        break;
      case USER_PROFILE_REQUEST:
        draft.userProfileRequest = true;
        draft.userProfileSuccess = false;
        draft.userProfileFailure = null;
        break;
      case USER_PROFILE_SUCCESS:
        draft.userProfileRequest = false;
        draft.userProfileSuccess = true;
        draft.userProfileFailure = null;
        break;
      case USER_PROFILE_FAILURE:
        draft.userProfileRequest = false;
        draft.userProfileSuccess = false;
        draft.userProfileFailure = action.error;
        break;
      case USER_NICK_DOUBLECHECK_REQUEST:
        draft.userNickDoubleCheckRequest = true;
        draft.userNickDoubleCheckSuccess = false;
        draft.userNickDoubleCheckFailure = null;
        break;
      case USER_NICK_DOUBLECHECK_SUCCESS:
        draft.userNickDoubleCheckRequest = false;
        draft.userNickDoubleCheckSuccess = true;
        draft.userNickDoubleCheckFailure = null;
        draft.nickDoubleCheck = action.data;
        break;
      case USER_NICK_DOUBLECHECK_FAILURE:
        draft.userNickDoubleCheckRequest = false;
        draft.userNickDoubleCheckSuccess = false;
        draft.userNickDoubleCheckFailure = action.error;
        break;
      case USER_NICK_DOUBLECHECK_RESET:
        draft.userNickDoubleCheckReset = true;
        draft.nickDoubleCheck.duplicate = null;
        draft.userNickDoubleCheckRequest = false;
        draft.userNickDoubleCheckSuccess = false;
        draft.userNickDoubleCheckFailure = null;
        break;
      default:
        return state;
    }
  });

export default reducer;
