import React from 'react';
import { UserCard } from '@/entities/user';
import { useQuery } from '@tanstack/react-query';

export const UsersGrid: React.FC = () => {
  const query = useQuery({ queryKey: ['users'] })
  return (
    <div>UsersGrid</div>
  )
}
