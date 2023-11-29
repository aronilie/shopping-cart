import { ReactNode } from "react";
import styled from "styled-components";

const ProductsStyledWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background: #111;
    color: #fff;
    padding: 1rem;
  }

  img {
    border-radius: 4px;
    width: 100%;
    aspect-ratio: 16/9;
    display: block;
    object-fit: cover;
    background: #fff;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    line-height: 20px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .stock {
    display: flex;
    justify-content: space-around;
  }

  .stock > div {
    display: flex;
    align-items: center;
    gap: 0.3em;
  }
`;

interface ProductsStyledProps {
  children: ReactNode;
}

export default function ProductsStyled({ children }: ProductsStyledProps) {
  return <ProductsStyledWrapper>{children}</ProductsStyledWrapper>;
}
