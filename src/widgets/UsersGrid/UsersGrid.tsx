import React from 'react';
import { UserCard } from '@/entities/user';
import { useQuery } from '@tanstack/react-query';
import { IUser } from '@/shared';
import { Grid } from './styles';
import { Skeleton } from "@chakra-ui/skeleton";

export const UsersGrid: React.FC = () => {
  const query = useQuery<any>({ queryKey: ['users'] });

  console.log(query.isLoading);
  return (
    <Grid>
      {query.isLoading && 
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
        {query.data?.data.results?.map((user: IUser) =>
          <UserCard
            user={user}
            key={new Date(user?.registered?.date).getTime()}
          />
        )}
      </Grid>
    </Grid>
  )
}
