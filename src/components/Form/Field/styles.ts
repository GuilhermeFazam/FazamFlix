import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 20px;
    label {
        position: relative;
        display: flex;

        span {
            position: absolute;
            left: 16px;
            top: 10px;
            transition: all 0.2s ease-in-out;
        }
    }
    input[type='text'],
    textarea {
        flex: 1;
        min-width: 100%;
        border: 1px solid var(--blackLighter);
        color: var(--blackLighter);
        border-radius: 6px;
        padding: 10px;
        outline: none;
        background: transparent;
        resize: none;

        &:focus + span {
            transform: scale(0.6) translateY(-10px);
        }
    }
    textarea {
        height: 100px;
    }
`;
