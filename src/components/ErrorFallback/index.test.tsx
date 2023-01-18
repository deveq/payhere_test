import {screen} from '@testing-library/react';
import {renderWithWrapper} from 'tests';
import ErrorFallback from './index';
import {ErrorBoundary} from 'react-error-boundary';
import {
    QueryErrorResetBoundary,
} from 'react-query';

describe('<FallBack/>', () => {
    const Bomb = () => {
        throw new Error('펑');
    };

    it('에러 처리가 정상적으로 되는지 확인', () => {
        const {container} = renderWithWrapper(
            <QueryErrorResetBoundary>
                {({reset}) => (
                    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
                        <Bomb />
                    </ErrorBoundary>
                )}
            </QueryErrorResetBoundary>
        )

        const fallback = screen.getByRole('alert');
        expect(fallback).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('에러 처리가 정상적으로 되는지 확인', () => {
        const {container} = renderWithWrapper(
            <QueryErrorResetBoundary>
                {({reset}) => (
                    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
                        <Bomb />
                    </ErrorBoundary>
                )}
            </QueryErrorResetBoundary>
        )
        
        const fallback = screen.getByRole('alert');
        const message = screen.getByText('에러가 발생했어요..')
        const button = screen.getByText('다시 시도해보기');
        
        expect(fallback).toHaveStyle({
            height: '100vh',
            'flex-direction': 'column',
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center',
        });

        expect(message).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(message).toHaveStyle({
            'font-size': '30px',
        });
        expect(button).toBeInTheDocument();
    });
})