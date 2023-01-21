import { useState } from 'react';
import { ChangeEventHandler, FormEventHandler } from 'react';
import * as Styled from './styles';
import { recordHistoryState, recordModeSelector } from 'atoms';
import { useRecoilValue } from 'recoil';
import SearchHistory from 'components/SearchHistory';

interface InputProps {
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onSubmit?: FormEventHandler<HTMLFormElement>;
	iconVisible?: boolean;
	value?: string;
	defaultValue?: string;
	placeholder?: string;
	onClickHistoryItem: (text: string) => void;
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
	const recordMode = useRecoilValue(recordModeSelector);
	return (
		<Styled.Container
			onSubmit={(event) => {
				event.preventDefault();
				if (onSubmit) onSubmit(event);
			}}
		>
			<Styled.Input
				type="text"
				name="search"
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
			{
				recordMode && (
					<SearchHistory 
						isFocused={isFocused}
						onClickHistoryItem={onClickHistoryItem}
						recordHistory={recordHistory}
					/>
				)
			}
		</Styled.Container>
	);
};

export default Input;
