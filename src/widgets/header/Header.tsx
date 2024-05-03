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
        console.log(e);
      })
      .finally(() => {
        usersStore.setIsLoading(false);
      })
  }

  return (
    <Container>
      <Input
        placeholder='Search'
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <Button onClick={handleRefetch}>Refresh Users</Button>
    </Container>
  )
}
