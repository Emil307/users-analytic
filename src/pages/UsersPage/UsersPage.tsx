import React from 'react';
import {
  Page,
  Content,
} from './styles';
import {
  Header,
  UsersGrid,
  Analytic
} from '@/widgets';
import { getUsers } from '@/entities/user';
import { useQuery } from '@tanstack/react-query';

export const UsersPage: React.FC = () => {
  const query = useQuery({ queryKey: ['users'], queryFn: getUsers });

  return (
    <Page>
      <Header/>
      <Content>
        <UsersGrid/>
        <Analytic/>
      </Content>
    </Page>
  )
}
