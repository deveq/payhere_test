import styled, {css} from "styled-components";

type ButtonSize = 'sm' | 'md' | 'lg';
export interface ButtonProps {
    size?: ButtonSize;
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
}

const handleSize = (size?: ButtonSize) => {
    if (size === 'sm') return '0.5rem 1rem';
    if (size === 'md') return '1rem 2rem';
    if (size === 'lg') return '1rem 2rem';
    return '0.75rem 1.5rem';
}

export const Button = styled.button<ButtonProps>`
    background-color: ${(props) => 
        props.backgroundColor || props.theme.bg_element2
    };
    border: none;
    border-radius: 5px;
    color: ${(props) => 
        props.color || props.theme.text1
    };
    padding: ${(props) => handleSize(props.size)};
    font-weight: bold;
    box-shadow: ${(props) => props.theme.boxShadow};
`;

Button.defaultProps = {
    size: 'md',
}