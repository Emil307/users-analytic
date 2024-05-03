import React, { useEffect, useState } from 'react';
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
import usersStore from '@/entities/user/store/usersStore';
import { observer } from 'mobx-react-lite';

export const UsersPage: React.FC = observer(() => {
  useEffect(() => {
    usersStore.setIsLoading(true);
    getUsers()
      .then((res) => {
        usersStore.setUsers(res.data.results);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        usersStore.setIsLoading(false);
      })
  }, [])

  return (
    <Page>
      <Header/>
      <Content>
        <UsersGrid 
          users={
            usersStore.searchedUsers.length > 0 ? 
              usersStore.searchedUsers : 
              usersStore.users
            }
          isLoading={usersStore.isLoading}
        />
        <Analytic
          users={usersStore.users}
        />
      </Content>
    </Page>
  )
});
