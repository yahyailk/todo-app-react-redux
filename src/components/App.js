import React from 'react'
import Header from './Header'
import AddTask from './AddTask'
import Sections from './Sections'
import Tasks from './Tasks'


const App = () => {
  return (
    <>
        <Header/>
        <AddTask />
        <Sections />
        <Tasks />
    </>
  )
}

export default App