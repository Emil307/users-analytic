import React from 'react';
import {
    Container,
} from './style';
import {
    Button,
    Input,
} from '@/shared';

export const Header: React.FC = () => {
  return (
    <Container>
        <Input placeholder='Search'/>
        <Button>Refresh Users</Button>
    </Container>
  )
}
