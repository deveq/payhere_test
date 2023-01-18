import styled from 'styled-components';
import {AiOutlineLoading} from 'react-icons/ai';
import {flexCenter} from 'styles/helper';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    ${flexCenter};
`;

export const Indicator = styled(AiOutlineLoading).attrs({
    'data-testid': 'icon'
})`
    width: 200px;
    height: 200px;
    animation: round 1s ease-in-out infinite;
    color: ${({theme}) => theme.text1};
    @keyframes round {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
`;