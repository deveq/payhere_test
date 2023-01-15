import * as Styled from './styles';

interface ToggleButtonProps {
    clicked: boolean;
    onClick: () => void;
}

const ToggleButton = ({clicked, onClick}: ToggleButtonProps) => {
    return (
        <Styled.Container onClick={onClick} clicked={clicked}>
            <Styled.Space clicked={clicked} />
            <Styled.Thumb clicked={clicked} />
        </Styled.Container>
    )
}

export default ToggleButton;