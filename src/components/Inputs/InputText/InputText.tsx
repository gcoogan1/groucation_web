import { FieldError } from 'react-hook-form';

interface InputTextProps {
  label: string;
  name: string;
  register: any;
  placeholder?: string;
  helperText?: string;
  isDisabled?: boolean;
  error?: FieldError;
}

const InputText: React.FC<InputTextProps> = ({
  label,
  name,
  placeholder,
  register,
  helperText,
  isDisabled,
  error,
}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block', marginBottom: '0.5rem' }}>
        {label}
      </label>
      <input
        {...register(name)}
        style={{
          width: '100%',
          padding: '0.5rem',
          border: error ? '1px solid red' : '1px solid #ccc',
          borderRadius: '4px',
        }}
        placeholder={placeholder}
      />
      {error && (
        <p style={{ color: 'red', fontSize: '0.875rem' }}>{error.message}</p>
      )}
    </div>
  );
};

export default InputText;
