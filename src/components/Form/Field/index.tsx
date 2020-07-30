import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

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
        <Container>
            <label htmlFor={name}>
                <input
                    name={name}
                    value={value}
                    onChange={onChange}
                    type={type}
                />
                <span>{label}</span>
            </label>
        </Container>
    );
};

export const TextArea: React.FC<TextAreaProps> = ({
    onChange,
    name,
    label,
}) => {
    return (
        <Container>
            <label htmlFor={name}>
                <textarea name={name} onChange={onChange} />
                <span>{label}</span>
            </label>
        </Container>
    );
};
