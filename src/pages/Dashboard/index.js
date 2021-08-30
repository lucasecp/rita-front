import React, { useEffect } from 'react'
import DefaultLayout from '../../components/Layout/DefaultLayout'

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard'
  }, [])

  return <DefaultLayout>
     Dashboard
  </DefaultLayout>
}

export default Dashboard
