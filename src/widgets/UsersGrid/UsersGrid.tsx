import React from 'react';
import { UserCard } from '@/entities/user';
import { IUser } from '@/shared';
import { Grid } from './styles';
import { Skeleton } from "@chakra-ui/skeleton";

export interface UsersGridProps {
  users: IUser[];
  isLoading: boolean;
}

export const UsersGrid: React.FC<UsersGridProps> = ({ users, isLoading }) => {
  return (
    <Grid>
      {isLoading && 
        <>
          <Skeleton
            startColor='var(--bg-gray)'
            endColor='var(--main-black)'
            width='332px'
            height='196px'
            borderRadius='16px'
          />
          <Skeleton
            startColor='var(--bg-gray)'
            endColor='var(--main-black)'
            width='332px'
            height='196px'
            borderRadius='16px'
          />
          <Skeleton
            startColor='var(--bg-gray)'
            endColor='var(--main-black)'
            width='332px'
            height='196px'
            borderRadius='16px'
          />
          <Skeleton
            startColor='var(--bg-gray)'
            endColor='var(--main-black)'
            width='332px'
            height='196px'
            borderRadius='16px'
          />
          <Skeleton
            startColor='var(--bg-gray)'
            endColor='var(--main-black)'
            width='332px'
            height='196px'
            borderRadius='16px'
          />
          <Skeleton
            startColor='var(--bg-gray)'
            endColor='var(--main-black)'
            width='332px'
            height='196px'
            borderRadius='16px'
          />
          <Skeleton
            startColor='var(--bg-gray)'
            endColor='var(--main-black)'
            width='332px'
            height='196px'
            borderRadius='16px'
          />
          <Skeleton
            startColor='var(--bg-gray)'
            endColor='var(--main-black)'
            width='332px'
            height='196px'
            borderRadius='16px'
          />
          <Skeleton
            startColor='var(--bg-gray)'
            endColor='var(--main-black)'
            width='332px'
            height='196px'
            borderRadius='16px'
          />
        </>
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
