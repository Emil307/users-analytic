import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const Analytic = () => {
    const query = useQuery({ queryKey: ['users'] })
  return (
    <div>Analytic</div>
  )
}
