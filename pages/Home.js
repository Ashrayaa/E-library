import React from 'react'
import Education from '../components/Education'
import Entertainment from '../components/Entertainment'
import Introduction from '../components/Introduction'
import Navigationbar from '../components/Navigationbar'

export default function Home() {
  return (
    <div className=''>
        <Navigationbar/>
        <Introduction/>
        <Entertainment/>
        <Education/>
    </div>
  )
}
