import styled from 'styled-components';

export const PostWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 3.5rem;
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

export const TagWrapper = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
`;

export const WriterButton = styled.button`
  width: 10rem;
  height: 100%;
  display: flex;
  padding-right: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: transparent;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

export const WriterImage = styled.img`
  width: 3rem;
  margin-bottom: 0.8rem;
  background-color: #dcdcdc;
  padding: 0.8rem;
  border-radius: 50%;
  @media ${(props) => props.theme.mobile} {
    width: 1.5rem;
    padding: 0.4rem;
    margin-right: 0.4rem;
  }
`;

export const WriterName = styled.p`
  font-size: 1rem;
  text-align: center;
  @media ${(props) => props.theme.mobile} {
    width: 7.5rem;
    font-size: 0.8rem;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const PostInfoButton = styled.button`
  width: 70rem;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  justify-content: flex-start;
  align-items: flex-start;
  border: 0;
  background-color: transparent;
  &: hover {
    cursor: pointer;
  }

  @media ${(props) => props.theme.desktop} {
    width: 90rem;
    padding: 0;
  }

  @media ${(props) => props.theme.tablet} {
    width: 60rem;
    padding: 0;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    padding: 0;
  }
`;

export const PostTitle = styled.p`
  width: 100%;
  margin-bottom: 0.4rem;
  padding: 0;
  font-weight: 500;
  font-size: 1.2rem;
  text-align: left;
`;

export const PostText = styled.p`
  width: 100%;
  text-align: left;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #b5b5b5;
`;

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0.4rem 0rem;
  @media ${(props) => props.theme.mobile} {
    justify-content: space-between;
  }
`;

export const PostDetailWrapper = styled.div`
  display: flex;
`;

export const MobileWriterDetailWrapper = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
  }
`;

export const DetailInfo = styled.span`
  padding: 0rem 0.2rem;
  color: #868686;
  margin-left: 0.4rem;
  margin-right: 1rem;
`;
