import styled from 'styled-components';

export const CommentForm = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media ${(props) => props.theme.tablet} {
    margin-top: 3rem;
  }
`;

export const WriterImage = styled.img`
  margin-right: 2rem;
  background-color: #e0e0e0;
  padding: 0.8rem;
  border-radius: 50%;
`;

export const CommentInput = styled.input`
  width: 85%;
  border: 0;
  border-bottom: 1px solid #b7b7b7;
  padding: 1%;
  &:focus {
    outline: none;
  }
  margin-right: 2rem;
`;

export const SubmitButton = styled.button`
  width: 7%;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.main};
  color: white;
  border: 0;
  margin: 0 auto;
  padding: 0.4rem 1rem;
  border-radius: 0.8rem;
  cursor: pointer;
  &: hover {
    color: ${(props) => props.theme.colors.main};
    background-color: white;
    border: 1px solid ${(props) => props.theme.colors.main};
  }
  @media ${(props) => props.theme.tablet} {
    width: 6rem;
    font-size: 0.8rem;
  }
`;

export const CommentWrapper = styled.div`
  width: 100%;
  height: 100%;
  @media ${(props) => props.theme.tablet} {
    margin-bottom: 1.5rem;
  }
`;

export const Comment = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3%;
`;

export const CommentDetailWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CommentDetail = styled.div`
  height: 100%;
  display: flex;
`;

export const WriterNickName = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const CreatedTime = styled.p`
  line-height: 2.08;
  font-size: 0.8rem;
  color: #ababab;
  margin-left: 2rem;
`;

export const CommentContent = styled.p`
  font-size: 0.5rem;
`;

export const NoComments = styled.p`
  margin-top: 5%;
  text-align: center;
  @media ${(props) => props.theme.tablet} {
    margin-bottom: 1.5rem;
  }
`;