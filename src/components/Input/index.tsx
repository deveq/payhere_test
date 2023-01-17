import { ChangeEventHandler, FormEventHandler } from 'react';
import * as Styled from './styles';

interface InputProps {
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onSubmit?: FormEventHandler<HTMLFormElement>;
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
    placeholder,
	onSubmit,
}: InputProps) => {
	return (
		<Styled.Container onSubmit={(e) => {
			e.preventDefault();
			if (onSubmit) onSubmit(e);
		}}>
			<Styled.Input
				type="text"
				onChange={onChange}
				value={value}
				defaultValue={defaultValue}
                placeholder={placeholder}
				autoComplete={'off'}
			/>
			{iconVisible && <Styled.Icon />}
		</Styled.Container>
	);
};

export default Input;
