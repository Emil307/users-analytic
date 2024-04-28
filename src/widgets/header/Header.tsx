import React from 'react';
import {
    Container,
} from './style';
import {
    Button,
    Input,
} from '@/shared';
import { useQuery } from '@tanstack/react-query';

export const Header: React.FC = () => {
  const query = useQuery({ queryKey: ['users'] });

  function handleRefetch() {
    query.refetch();
  }

  return (
    <Container>
      <Input placeholder='Search'/>
      <Button onClick={handleRefetch}>Refresh Users</Button>
    </Container>
  )
}
