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
`;
