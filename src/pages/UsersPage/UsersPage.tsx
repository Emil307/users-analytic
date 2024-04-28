import React, { useEffect } from 'react';
import {
  Page,
  Content,
} from './styles';
import { Header } from '@/widgets';
import { getUsers } from '@/entities/user';

export const UsersPage: React.FC = () => {
  
  useEffect(() => {
    getUsers()
      .then((res) => {
        console.log(res.data.results);
      })
      .catch((e) => {
        console.log(e);
      })
  }, [])

  return (
    <Page>
      <Header/>
      <Content>
        
      </Content>
    </Page>
  )
}
