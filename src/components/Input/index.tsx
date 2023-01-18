import {useState} from 'react';
import { ChangeEventHandler, FormEventHandler } from 'react';
import * as Styled from './styles';
import {recordHistoryState} from 'atoms';
import {useRecoilValue} from 'recoil';

interface InputProps {
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onSubmit?: FormEventHandler<HTMLFormElement>;
	iconVisible?: boolean;
	value?: string;
	defaultValue?: string;
    placeholder?: string;
	onClickHistoryItem?: (text: string) => void;
}

const Input = ({
	iconVisible = true,
	onChange,
	defaultValue,
	value,
    placeholder,
	onSubmit,
	onClickHistoryItem,
}: InputProps) => {
	const [isFocused, setIsFocused] = useState(false);
	const recordHistory = useRecoilValue(recordHistoryState);
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
				onFocus={() => {
					setIsFocused(true);
				}}
				onBlur={() => {
					setTimeout(() => {
						setIsFocused(false);
					}, 100);
				}}
			/>
			{iconVisible && <Styled.Icon />}
			<Styled.History show={isFocused && recordHistory.length > 0}>
				{
					[...recordHistory].reverse().map(item => (
						<Styled.HistoryItem 
						onClick={() => {
							if (!onClickHistoryItem) return;
							onClickHistoryItem(item)
						}}
						key={item}>{item}</Styled.HistoryItem>
					))
				}
			</Styled.History>
		</Styled.Container>
	);
};

export default Input;
