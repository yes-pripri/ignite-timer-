import styled, {css} from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariant = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

background-color: ${props=> props.theme.primary};
color: ${props=> props.theme.white};
border-radius: 4px;
border: 0;
margin: 8px;

    /* ${props => { 
        return css`background-color:${buttonVariant[props.variant]}`
    }} 
        */
` 
