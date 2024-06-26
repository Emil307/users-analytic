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
  Category,
  Column,
  Value,
} from './styles';
import usersStore from '@/entities/user/store/usersStore';

export interface UserCardProps {
  user: IUser;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  function changeSelect() { 
    setIsSelected(!isSelected);
  }

  function handleDelete() {
    usersStore.deleteUser(user.email);
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
          <Column>
            <Category>Phone No</Category>
            <Category>Birthday</Category> 
            <Category>Address</Category>    
          </Column>
          <Column>
            <Value>{user.phone}</Value>
            <Value>{new Date(user.dob.date).toLocaleDateString()}</Value> 
            <Value>{user.location.city} {user.location.state} {user.location.country}</Value>
          </Column>
        </Details>
      </SelectButton>
      {isSelected &&
        <DeleteButton onClick={handleDelete}>
          <img src="/icons/delete.svg" alt="delete" />
        </DeleteButton>
      }
    </Container>
  )
}
