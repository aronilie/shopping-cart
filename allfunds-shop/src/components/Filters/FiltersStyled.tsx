import { ReactNode } from "react";
import styled from "styled-components";

const FiltersStyledWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
`;

interface FiltersStyledProps {
  children: ReactNode;
}

export default function FiltersStyled({ children }: FiltersStyledProps) {
  return <FiltersStyledWrapper>{children}</FiltersStyledWrapper>;
}
