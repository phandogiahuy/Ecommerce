import shadows from "@material-ui/core/styles/shadows";
import { Button, Space } from "antd";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Infor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10000px;
`;
const Title = styled.h1`
  font-weight: bolder;
  font-size: 30px;
  margin-bottom: 20px;
`;

const CategoriesItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Infor>
        <Title>{item.title}</Title>
        <Space wrap>
          <Button
            style={{
              backgroundColor: "peachpuff",
              letterSpacing: "1px",
              fontSize: "20px",
              marginLeft: "10px",
              border: "none",
              padding: "5px",
              marginBottom: "20px",
            }}
          >
            ORDER NOW
          </Button>
        </Space>
      </Infor>
    </Container>
  );
};

export default CategoriesItem;
