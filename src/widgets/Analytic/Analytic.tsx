import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
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
import { IUser } from '@/shared';

export const Analytic: React.FC = () => {
  const query = useQuery<any>({ queryKey: ['users'] });

  const [analytic, setAnalytic] = useState({
    maleCount: 0,
    femaleCount: 0,
    to20: 0,
    to30: 0,
    to40: 0,
    to50: 0,
    more50: 0,
  })

  function calcAnalytic() {
    let maleCount = 0;
    let femaleCount = 0;
    let to20 = 0;
    let to30 = 0;
    let to40 = 0
    let to50 = 0;
    let more50 = 0;

    query.data?.data.results.forEach((user: IUser) => {
      if (user.gender === 'male') {
        maleCount += 1
      }
      if (user.gender === 'male') {
        femaleCount += 1
      }

      switch (true) {
        case (11 <= user.dob.age) && (20 >= user.dob.age):
          to20 += 1;
          break
        case (21 <= user.dob.age) && (30 >= user.dob.age):
          to30 += 1;
          break
        case (31 <= user.dob.age) && (40 >= user.dob.age):
          to40 += 1;
          break
        case (41 <= user.dob.age) && (50 >= user.dob.age):
            to50 += 1;
            break
        default:
          more50 += 1;
          break
      }
    })

    setAnalytic({
      maleCount: maleCount,
      femaleCount: femaleCount,
      to20: to20,
      to30: to30,
      to40: to40,
      to50: to50,
      more50: more50,
    })
  }

  useEffect(() => {
    calcAnalytic();
  }, [query.data])

  return (
    <Container>
      <Total>{query.data?.data.results.length} Users</Total>
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
