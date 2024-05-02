import React, { useEffect } from 'react';
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
import toast, { Toaster } from 'react-hot-toast';

export const UsersPage: React.FC = observer(() => {
  useEffect(() => {
    usersStore.setIsLoading(true);
    getUsers()
      .then((res) => {
        usersStore.setUsers(res.data.results);
      })
      .catch((e) => {
        switch(e.response.status) {
          case 429:
            toast.error('Вы отправляете слишком много запросов');
            break
          case 404:
            toast.error('Страница не найдена');
            break
          case 500:
            toast.error('Ошибка сервера...');
            break
          default:
            toast.error('Неизвестная ошибка, мы уже работаем над ее устранением');
        }
      })
      .finally(() => {
        usersStore.setIsLoading(false);
      })
  }, [])

  return (
    <>
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
      <Toaster
        position="top-center"
      />
    </>
  )
});
