import { useState } from 'react';

import { InputContainer, StyledInput, Label, Icon, HelperText, ErrorText } from './Input.styles';
import Graphics from '../Graphics/Graphics';
import Clear from '../../assets/Icons/Clear.svg?react';
import { designTokens } from '../../styles/designTokens';

interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  placeholder?: string;
  helperText?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  onChange,
  errorMessage,
  placeholder,
  helperText
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(true);

  const handleClear = () => {
     onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <InputContainer>
      <StyledInput
        id={id}
        type={'text'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isError={error}
      />
      <Label isError={error} aria-label={label} htmlFor={id}>
        {label}
      </Label>
      <Icon isVisible={isFocused || !!value} isPopulated={!!value}>
      <div 
          role="button" 
          aria-label="Clear input"
          onClick={handleClear}
          style={{ cursor: 'pointer' }}
        >
        <Graphics size="medium">
          <Clear fill={designTokens.color.surface.text1} />
        </Graphics>
        </div>
      </Icon>
      {!!helperText && <HelperText>{helperText}</HelperText>}
      {!!error && <ErrorText>{errorMessage}</ErrorText>}
    </InputContainer>
  );
};

export default Input;
