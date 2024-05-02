import React from 'react';
import { UserCard } from '@/entities/user';
import {
  IUser,
  GridSkeleton,
} from '@/shared';
import { Grid } from './styles';

export interface UsersGridProps {
  users: IUser[];
  isLoading: boolean;
}

export const UsersGrid: React.FC<UsersGridProps> = ({ users, isLoading }) => {
  return (
    <Grid>
      {isLoading && 
        <GridSkeleton/>
      }
      <Grid>
        {users.map((user: IUser) =>
          <UserCard
            user={user}
            key={new Date(user?.registered?.date).getTime()}
          />
        )}
      </Grid>
    </Grid>
  )
}
