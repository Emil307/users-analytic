import React from 'react';
import {
    ButtonStyled,
} from './styles';

export interface IButtonProps extends Omit<React.ComponentProps<'button'>, 'ref'> {}

export const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonStyled {...props}>{children}</ButtonStyled>
  )
}
