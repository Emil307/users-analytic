import React from 'react';
import { IUser } from '@/shared';
import {
  Container,
  Summary,
  SummaryImage,
  SummaryText,
} from './styles';

export interface UserCardProps {
  user: IUser;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Container>
      <Summary>
        <SummaryImage
          src={user.picture.medium}
          alt={`${user.name.first} ${user.name.last}`}
        />
        <SummaryText></SummaryText>
      </Summary>
    </Container>
  )
}
