import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Descriptions } from "antd";
import React from "react";
import styled from "styled-components";

import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexWrap: "wrap" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Title = styled.h1``;

const List = styled.ul`
  list-style-type: none;
  margin-right: 20px;
  padding: 20px;
`;
const ListItem = styled.li``;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "lightgray" })}
`;
const Logo = styled.h1``;
const Desc = styled.div`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${[(props) => props.bg]};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  &:hover {
    background-color: gainsboro;
    transform: scale(1.1);
  }
`;
const Link = styled.a``;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ABOUT WE</Logo>
        <Desc>
          HACCP certified coffee roaster, specializing in providing high quality
          roasted coffee and specialty coffees around the world. THE COFFEE BEAN
          & TEA LEAF, THE COFFEE BEAN, CBTL, THE ORIGINAL ICE BLENDED, ICE
          BLENDED and THE PURPLE STRAW, and their logos and other marks are
          registered trademarks of Super Magnificent Coffee Company Ireland
          Limited in the United States and may be registered in other countries
        </Desc>
      </Left>
      <Center>
        <Title>OUR COMPANY</Title>
        <List>
          <ListItem>
            <EnvironmentOutlined />
            <b style={{ fontWeight: "700" }}> Address:</b> Truong Thanh, Thu Duc
            City
          </ListItem>
          <ListItem>
            <PhoneOutlined />
            <b style={{ fontWeight: "700" }}> Phone number:</b> 0707323959
          </ListItem>
          <ListItem>
            <MailOutlined />
            <b style={{ fontWeight: "700" }}> Email:</b>{" "}
            phandogiahuy2000@gmail.com
          </ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
        </List>
      </Center>
      <Right>
        <Title>FOLLOW US</Title>
        <List>
          <ListItem>
            <Link href="https://www.facebook.com/giahuy.6200/">
              <SocialIcon bg="#8a2be2">
                <FacebookOutlined style={{ fontSize: "50px" }} />
              </SocialIcon>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/giahuy.ph/">
              <SocialIcon bg="#dd466a">
                <InstagramOutlined style={{ fontSize: "50px" }} />
              </SocialIcon>
            </Link>
          </ListItem>
        </List>
      </Right>
    </Container>
  );
};

export default Footer;
