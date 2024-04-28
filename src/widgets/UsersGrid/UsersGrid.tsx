import React from 'react';
import { UserCard } from '@/entities/user';
import { useQuery } from '@tanstack/react-query';
import { IUser } from '@/shared';

export const UsersGrid: React.FC = () => {
  const query = useQuery<any>({ queryKey: ['users'] });

  return (
    <div>
      {query.data?.data.results?.map((user: IUser) =>
        <UserCard
          user={user}
          key={new Date(user?.registered?.date).getTime()}
        />
      )}
    </div>
  )
}
