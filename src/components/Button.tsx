
import { ButtonContainer, ButtonVariant} from './Button.styes';

interface ButtonProps {
    variant?: ButtonVariant;
}

export function Button ({ variant = 'primary'}: ButtonProps) {
    return <ButtonContainer variant={variant}>Enviar  </ButtonContainer>
}