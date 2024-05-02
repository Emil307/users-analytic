import React, { useEffect, useState } from 'react';
import {
  Container,
  Total,
  Section,
  SectionTitle,
  Columns,
  Column,
  Category,
  Value,
} from './styles';
import { calcAnalytic } from '@/fetures/analytic';
import { IUser } from '@/shared';

export interface AnalyticProps {
  users: IUser[];
}

export const Analytic: React.FC<AnalyticProps> = ({ users }) => {
  const [analytic, setAnalytic] = useState({
    maleCount: 0,
    femaleCount: 0,
    to20: 0,
    to30: 0,
    to40: 0,
    to50: 0,
    more50: 0,
  })

  useEffect(() => {
    const analytic = calcAnalytic(users);
    setAnalytic(analytic);
  }, [users])

  return (
    <Container>
      <Total>{users.length} Users</Total>
      <Section>
        <SectionTitle>Age Groups</SectionTitle>
        <Columns>
          <Column>  
            <Category>11 to 20</Category>
            <Category>21 to 30</Category>
            <Category>31 to 40</Category>
            <Category>41 to 50</Category>
            <Category>51+</Category>
          </Column>
          <Column>
            <Value>{analytic.to20} users</Value>
            <Value>{analytic.to30} users</Value>
            <Value>{analytic.to40} users</Value>
            <Value>{analytic.to50} users</Value>
            <Value>{analytic.more50} users</Value>
          </Column>
        </Columns>
      </Section>
      <Section>
        <SectionTitle>Gender Groups</SectionTitle>
        <Columns>
          <Column>
            <Category>Male</Category>
            <Category>Female</Category>       
          </Column>
          <Column>
            <Value>{analytic.maleCount} users</Value>
            <Value>{analytic.femaleCount} users</Value> 
          </Column>
        </Columns>
      </Section>
    </Container>
  )
}
