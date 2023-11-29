import { ReactNode } from "react";
import styled from "styled-components";

const CartStyledWrapper = styled.div`
  .cart {
    background: #000;
    display: none;
    padding: 32px;
    position: fixed;
    right: 0px;
    top: 0px;
    width: 200px;
  }

  .cart img {
    aspect-ratio: 16/9;
    width: 100%;
  }

  .cart li {
    border-bottom: 1px solid #444;
    padding-bottom: 16px;
  }

  .cart footer {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
  }

  .cart footer button {
    padding: 8px;
  }

  .cart-button {
    align-items: center;
    background: #09f;
    border-radius: 9999px;
    cursor: pointer;
    display: flex;
    height: 32px;
    justify-content: center;
    padding: 4px;
    position: absolute;
    right: 8px;
    top: 8px;
    transition: all 0.3s ease;
    width: 32px;
    z-index: 9999;
  }

  .cart-button:hover {
    scale: 1.1;
  }

  @media only screen and (min-width: 768px) {
    .cart-button ~ .cart {
      height: 100%;
      display: block;
    }
  }

  @media only screen and (max-width: 768px) {
    .cart-button ~ input:checked ~ .cart {
      height: 100%;
      display: block;
    }
  }

  .cart-checkout {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }
`;

interface CartStyledProps {
  children: ReactNode;
}

export default function CartStyled({ children }: CartStyledProps) {
  return <CartStyledWrapper>{children}</CartStyledWrapper>;
}
