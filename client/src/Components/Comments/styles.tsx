import styled from 'styled-components';

export const CommentForm = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const CommentInput = styled.input`
  width: 95%;
  border: 0;
  border-bottom: 1px solid #b7b7b7;
  padding: 1%;
  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  width: 5%;
`;

export const CommentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Comment = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3%;
`;

export const WriterImage = styled.img`
  margin-right: 2%;
  background-color: #e0e0e0;
  padding: 1%;
  border-radius: 50%;
`;

export const CommentDetail = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WriterNickName = styled.p`
  font-size: 1.2rem;
`;

export const CommentContent = styled.p`
  font-size: 0.8rem;
`;

export const NoComments = styled.p`
  margin-top: 5%;
  text-align: center;
`;
