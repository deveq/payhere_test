import styled from "styled-components";

type ButtonSize = 'sm' | 'md' | 'lg';
export interface ButtonProps {
    size?: ButtonSize;
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    showShadow?: boolean;
}

const handleSize = (size?: ButtonSize) => {
    if (size === 'sm') return '0.5rem 1rem';
    if (size === 'md') return '0.75rem 1.5rem';
    if (size === 'lg') return '1rem 2rem';
    return '0.75rem 1.5rem';
}

export const Button = styled.button<ButtonProps>`
    background: ${({backgroundColor, theme}) => 
        backgroundColor || theme.bg_element2
    };
    border-radius: 5px;
    color: ${({color, theme}) => 
        color || theme.text1
    };
    padding: ${({size}) => handleSize(size)};
    font-weight: bold;
    box-shadow: ${({theme, showShadow}) => showShadow ? theme.boxShadow : 'none'};
    border: ${({showShadow, theme}) => showShadow ? 'none' : `1px solid ${theme.border2}` };
    &:hover,
    &:active {
        background: ${({theme}) => theme.bg_element3};
    }
    cursor: pointer;
`;

Button.defaultProps = {
    size: 'md',
}

export const Primary = styled(Button)`
    background: ${({theme}) => theme.primary};
    color: white;
`;

export const Destructive = styled(Button)`
    background: ${({theme}) => theme.destructive};
    color: white;
    border: none;
    &:hover,
    &:active {
        background: ${({theme}) => theme.destructive};
    }
`;