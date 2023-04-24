import React from "react";
import styled from "styled-components";

import { popularProducts } from "../data";
import Product from "./Product";
import { Row } from "antd";

const PopularProduct = () => {
  return (
    <Row gutter={[16, 24]}>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Row>
  );
};

export default PopularProduct;
