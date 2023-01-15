import { ChangeEventHandler } from 'react';
import * as Styled from './styles';

interface InputProps {
	onChange?: ChangeEventHandler<HTMLInputElement>;
	iconVisible?: boolean;
	value?: string;
	defaultValue?: string;
    placeholder?: string;
}

const Input = ({
	iconVisible = true,
	onChange,
	defaultValue,
	value,
	
    placeholder
}: InputProps) => {
	return (
		<Styled.Container>
			<Styled.Input
				onChange={onChange}
				value={value}
				defaultValue={defaultValue}
                placeholder={placeholder}
			/>
			{iconVisible && <Styled.Icon />}
		</Styled.Container>
	);
};

export default Input;
