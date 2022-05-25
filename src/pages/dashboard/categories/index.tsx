import React from 'react'
import Topbar from '../../../components/Topbar/Topbar'
import withAuth from '../../../HOC/withAuth'

function categories() {
  return (
    <>
      <Topbar />
      Categories
    </>
  )
}

export default withAuth(categories)
