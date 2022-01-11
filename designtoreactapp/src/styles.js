import styled from "styled-components";

// export const Container = styled.div`
//   width: 600px;
//   height: 500px;
// `;

export const Container = styled.div`
  width: 400px;
  height: 450px;
  background: white;
  box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 150px;
  object-fit: cover;
  width: 100%;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  justify-content: space-between;
  height: 100%;
`;

export const TopLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Heading = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin: 0;
`;

export const Summary = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: grey;
`;

export const BottomInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.span`
  font-size: 14px;
  line-height: 20px;
  background: lightgreen;
  padding: 5px;
  border-radius: 12px;
`;

export const AvartarAndText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 16px;
`;

export const AvatarImg = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 12px;
`;

export const Author = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;
