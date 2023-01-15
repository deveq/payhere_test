import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    flex: 1;
`;

export const ListItem = styled.li`
    height: 30px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Link = styled(NavLink)`
    color: ${(props) => props.theme.text1};
    text-decoration: none;
    font-size: 20px;
    text-transform: capitalize;
    &:hover,
    &:active {
        opacity: 0.6;
    }
`;