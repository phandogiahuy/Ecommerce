import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Input, Space } from "antd";
import React from "react";
import styled from "styled-components";

const { Search } = Input;
const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: larger;
  text-align: center;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>English</Language>
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              allowClear
              size="medium"
              enterButton
              style={{
                marginLeft: 10,
                backgroundColor: "coral",
              }}
            />
          </Space>
        </Left>
        <Center>
          <Logo>AROMA deLute.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge count={5}>
              <ShoppingCartOutlined style={{ fontSize: "30px" }} />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
