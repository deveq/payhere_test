import styled from 'styled-components';
import {flexCenter} from 'styles/helper';

interface PageButtonProps {
  selected?: boolean;
}

export const Container = styled.nav`
    ${flexCenter};
    gap: 4px;
`;

export const PageButton = styled.button<PageButtonProps>`
  border: none;
  border-radius: 8px;
  background: ${({theme, selected}) => selected ? theme.primary : 'transparent'};
  color: ${({theme, selected}) => selected ? 'white' : theme.text1};
  &:hover {
    transform: translateY(-2px);
    cursor: pointer;
  }
  &[disabled] {
    cursor: revert;
    transform: revert;
  }
`;