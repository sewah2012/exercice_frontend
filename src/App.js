import { useEffect, useState } from 'react'
import './App.css'
import AddUserModal from './Components/AddUserModal'
import UserList from './Components/UserList'
import { data } from './DataSource'

function App() {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    setUserList(data)
    return () => {}
  }, [])

  const deleteUser = (id) => {
    setUserList(userList.filter((u) => u.id !== id))
  }
  return (
    <div className="App">
      <h1>Liste d'utilisateur</h1>
      <UserList userList={userList} deleteUser={deleteUser} />
      <AddUserModal setUserList={setUserList} userList={userList} />
    </div>
  )
}

export default App
