import { ShoppingOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import React from "react";
import styled from "styled-components";

const Infor = styled.div`
  position: absolute;
  top: 355px;
  left: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    background-color: antiquewhite;
  }
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  position: relative;
  margin-top: 40px;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 100%;
  z-index: 2;
  width: 100%;
`;
const Price = styled.div`
  font-weight: 700;
  font-size: 20px;
  position: absolute;
  top: 355px;
  left: 1px;
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Price>100,000₫</Price>
      <Infor>
        <Space wrap>
          <Button
            className="buttonBuy"
            ghost
            type="primary"
            icon={<ShoppingOutlined />}
            style={{
              fontSize: "20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              color: "#1C2F7F",
              border: "#38498f solid 2px",
            }}
          >
            ORDER NOW
          </Button>
        </Space>
      </Infor>
    </Container>
  );
};

export default Product;
