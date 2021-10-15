import React from "react";
import styled from "styled-components";
import { AiOutlineFrown } from "react-icons/ai";

function ErrorAlert({ msg }) {
  return (
    <Container>
      <AlertIcon />
      <Message>{msg}</Message>
    </Container>
  );
}

export default ErrorAlert;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AlertIcon = styled(AiOutlineFrown)`
  color: #f04444;
  font-size: 72px;
  margin-bottom: 12px;
`;

const Message = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: #f04444;
`;
