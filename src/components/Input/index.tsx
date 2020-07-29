import React, { InputHTMLAttributes } from 'react';

// import { Container } from './styles';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    value?: string;
    type: string;
    label: string;
}

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

export const Input: React.FC<InputProps> = ({
    value,
    type,
    onChange,
    name,
    label,
}) => {
    return (
        <div>
            <label>
                {label}
                <input
                    name={name}
                    value={value}
                    onChange={onChange}
                    type={type}
                />
            </label>
        </div>
    );
};

export const TextArea: React.FC<TextAreaProps> = ({
    onChange,
    name,
    label,
}) => {
    return (
        <div>
            <label>
                {label}
                <textarea name={name} onChange={onChange} />
            </label>
        </div>
    );
};
