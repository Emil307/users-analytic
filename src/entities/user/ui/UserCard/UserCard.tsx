import React, { useState } from 'react';
import { IUser } from '@/shared';
import {
  Container,
  SelectButton,
  Summary,
  SummaryImage,
  SummaryText,
  Name,
  Email,
  Details,
  DeleteButton,
} from './styles';

export interface UserCardProps {
  user: IUser;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  function changeSelect() { 
    setIsSelected(!isSelected);
  }

  return (
    <Container
      style={{
        outline: isSelected ? '1px solid var(--border-orange)' : ''
      }}
    >
      <SelectButton
        onClick={changeSelect}
      >
        <Summary>
          <SummaryImage
            src={user.picture.medium}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <SummaryText>
            <Name
              style={{
                color: isSelected ? 'var(--main-orange)' : 'var(--main-white)'
              }}            
            >
              {user.name.first} {user.name.last}
            </Name>
            <Email>{user.email}</Email>
          </SummaryText>
        </Summary>
        <Details>

        </Details>
      </SelectButton>
      {isSelected &&
        <DeleteButton>
          удалить
        </DeleteButton>
      }
    </Container>
  )
}
