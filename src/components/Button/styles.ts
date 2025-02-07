import styled from 'styled-components';

export const ButtonContainer = styled.button<{ disabled?: boolean }>`
    width: 100%;
    height: 42px;
    background-color: ${(props) => (props.disabled ? '#ccc' : '#81259D')};
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: ${(props) => (props.disabled ? 1 : 0.6)};
        cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    }
`;
