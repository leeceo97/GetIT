import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { USER_PROFILE_EDIT_REQUEST } from '@reducers/actions';
import UserImg from '@assets/icons/user.svg';
import { HorizontalLine } from '@assets/styles/commons';
import StackInput from '@components/StackInput';
import { IProfileInfo } from '@types';
import {
  MainProfile,
  ProfileImage,
  PersonalInfoWrapper,
  ProfileRight,
  IntroWrapper,
  SubTitleWrapper,
  useStyles,
  PersonalInfo,
  SubmitButton,
} from './styles';
import Portfoilo from '../Portfolio';
import Project from '../Project';

function MyProfile() {
  const classes = useStyles();
  const profileInfo = useSelector(
    (state: RootStateOrAny) => state.user.profileInfo,
  );
  const dispatch = useDispatch();
  const [intro, setIntro] = useState(profileInfo.info);
  const [editedNickname, setNickname] = useState(profileInfo.nickname);
  const [editedEmail, setEmail] = useState(profileInfo.email);
  const [editedJob, setJob] = useState(profileInfo.job);
  const [editedStacks, setStacks] = useState(profileInfo.stack);

  const onChange = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case 'nickname':
        setNickname(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'job':
        setJob(value);
        break;
      case 'intro':
        setIntro(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = () => {
    if (
      intro === '' ||
      editedNickname === '' ||
      editedEmail === '' ||
      editedJob === ''
    ) {
      return alert('닉네임, 이메일, 직업, 자기소개 부분은 빈칸일 수 없습니다!');
    }
    const updatedProfileInfo: IProfileInfo = {
      user: profileInfo.user,
      user_pk: profileInfo.user_pk,
      job: editedJob,
      developer_level: profileInfo.developer_level,
      designer_and_pm_level: profileInfo.designer_and_pm_level,
      image: profileInfo.image,
      email: editedEmail,
      info: intro,
      git: profileInfo.git,
      stacks: editedStacks,
    };
    console.log(updatedProfileInfo);
    dispatch({
      type: USER_PROFILE_EDIT_REQUEST,
      data: updatedProfileInfo,
    });
  };

  return (
    <ProfileRight>
      <MainProfile>
        <ProfileImage src={UserImg} alt='profileImage' />
        {/* {profileDummyData.img ? (
            <ProfileImage src={profileDummyData.img} alt='profileImage' />
          ) : (
            
          )} */}
        <div>
          <PersonalInfoWrapper>
            닉네임{' '}
            <PersonalInfo
              name='nickname'
              value={editedNickname}
              onChange={onChange}
            />
          </PersonalInfoWrapper>
          <PersonalInfoWrapper>
            이메일{' '}
            <PersonalInfo
              name='email'
              value={editedEmail}
              onChange={onChange}
            />
          </PersonalInfoWrapper>
          <PersonalInfoWrapper>
            {' '}
            직업{' '}
            <PersonalInfo
              name='job'
              value={editedJob}
              onChange={onChange}
            />{' '}
          </PersonalInfoWrapper>
        </div>
      </MainProfile>

      <IntroWrapper name='intro' value={intro} onChange={onChange} />

      <SubTitleWrapper>
        <HorizontalLine width='40%' />
        <p>기술스택</p>
        <HorizontalLine width='40%' />
      </SubTitleWrapper>

      <StackInput
        initialStacks={editedStacks}
        setInitialStacks={setStacks}
        placeHolder=''
      />

      <SubTitleWrapper>
        <HorizontalLine width='40%' />
        <p>포트폴리오</p>
        <HorizontalLine width='40%' />
      </SubTitleWrapper>
      <Portfoilo />

      <SubTitleWrapper>
        <HorizontalLine width='40%' />
        <p>프로젝트 현황</p>
        <HorizontalLine width='40%' />
      </SubTitleWrapper>
      <Project />

      <SubTitleWrapper>
        <HorizontalLine width='40%' />
        <p>완료된 프로젝트</p>
        <HorizontalLine width='40%' />
      </SubTitleWrapper>
      <Project finished />

      <SubmitButton type='button' onClick={onSubmit}>
        저장하기
      </SubmitButton>
    </ProfileRight>
  );
}
export default MyProfile;
