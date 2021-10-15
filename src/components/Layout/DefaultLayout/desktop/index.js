import React from 'react'
import Sidenav from '../Sidenav'
import Header from '../Header'

const Desktop = ({ title, html }) => {
  return (
    <>
      <Header title={title} />
      <Sidenav />

      <main>{html}</main>
    </>
  )
}

export default Desktop
