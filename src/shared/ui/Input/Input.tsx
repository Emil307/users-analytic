import React from 'react';
import {
    InputStyled
} from './styles';

export interface IInputProps extends Omit<React.ComponentProps<'input'>, 'ref'> {}

export const Input: React.FC<IInputProps> = ({ ...props  }) => {
  return (
    <InputStyled {...props}/>
  )
}
