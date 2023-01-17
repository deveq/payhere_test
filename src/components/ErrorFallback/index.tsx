import {FallbackProps} from 'react-error-boundary';
import Button from 'components/Button';
import * as Styled from './styles';

const ErrorFallback = ({error,resetErrorBoundary}: FallbackProps) => {
    return (
        <Styled.Container role="alert">
            <Styled.SadIcon />
            <Styled.Paragraph>에러가 발생했어요..</Styled.Paragraph>
            <Styled.ErrorMessage>{error.message}</Styled.ErrorMessage>
            <Button 
                size="md" 
                onClick={resetErrorBoundary}
            >
                    다시 시도해보기
            </Button>
        </Styled.Container>
    )
}

export default ErrorFallback;

