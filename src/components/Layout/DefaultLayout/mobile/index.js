import React from 'react'
import Sidenav from './Sidenav'
import HeaderMobile from './Header'

const Mobile = ({ title, html }) => {
  return (
    <>
      <HeaderMobile />
      <Sidenav />
      <main>
        <h1>{title || 'Page Title'}</h1>
        {html}
      </main>
    </>
  )
}

export default Mobile
