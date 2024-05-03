import React, { useEffect, useState } from 'react';
import {
    Container,
} from './style';
import {
    Button,
    Input,
} from '@/shared';
import { getUsers } from '@/entities/user';
import usersStore from '@/entities/user/store/usersStore';
import toast, { Toaster } from 'react-hot-toast';

export const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    usersStore.search(searchTerm);
  }, [searchTerm])

  function handleRefetch() {
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
  }

  return (
    <>
      <Container>
        <Input
          placeholder='Search'
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
        <Button onClick={handleRefetch}>Refresh Users</Button>
      </Container>
      <Toaster
        position="top-center"
      />
    </>
  )
}
