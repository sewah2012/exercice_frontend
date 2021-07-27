import './Styles/AddUserModal.css'
import { Backdrop, Button, Fade, Modal, Paper } from '@material-ui/core'
import React, { useState } from 'react'

const AddUserModal = ({ setUserList, userList }) => {
  const [open, setOpen] = useState(false)
  const [newUser, setNewUser] = useState({
    id: '',
    createdDate: '',
    status: '',
    firstName: '',
    lastName: '',
    userName: '',
    registrationNumber: '',
  })

  const [errors, setErrors] = useState({})

  const onChangeHandler = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    })
    setErrors({
      [e.target.name]: null,
    })
  }
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setNewUser({
      id: '',
      createdDate: '',
      status: '',
      firstName: '',
      lastName: '',
      userName: '',
      registrationNumber: '',
    })
  }
  const handSubmit = (e) => {
    e.preventDefault()
    // console.log(JSON.stringify(newUser))
    //validation
    if (newUser.id === '') {
      setErrors({
        ...errors,
        id: true,
      })
      return
    }
    if (newUser.lastName === '') {
      setErrors({
        ...errors,
        lastName: true,
      })
      return
    }
    if (newUser.firstName === '') {
      setErrors({
        ...errors,
        firstName: true,
      })
      return
    }
    if (newUser.userName === '') {
      setErrors({
        ...errors,
        userName: true,
      })
      return
    }
    if (newUser.createdDate === '') {
      setErrors({
        ...errors,
        createdDate: true,
      })
      return
    }
    if (newUser.registrationNumber === '') {
      setErrors({
        ...errors,
        registrationNumber: true,
      })
      return
    }
    setUserList([...userList, newUser])

    setErrors({})
    handleClose()
  }
  return (
    <div>
      <div className="buttomAction">
        <Button
          variant="contained"
          style={{ backgroundColor: '#FDB64D' }}
          size="small"
          onClick={handleOpen}
        >
          Ajouter Utilisateur
        </Button>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className=""
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className="modalPaper">
            <h1>Ajoute d'usilateur</h1>

            <form className="formWrapper">
              <div className="adduserform">
                <div className="inputWrapper">
                  <label for="id">ID </label>
                  <br />
                  <input
                    id="id"
                    name="id"
                    value={newUser.id}
                    onChange={onChangeHandler}
                  />
                  <br />
                  {errors.id && (
                    <p style={{ color: 'red' }}>Please fill this field</p>
                  )}
                </div>
                <div className="inputWrapper">
                  <label for="lastName">Nom </label>
                  <br />
                  <input
                    id="lastName"
                    name="lastName"
                    value={newUser.lastName}
                    onChange={onChangeHandler}
                  />
                  <br />
                  {errors.lastName && (
                    <p style={{ color: 'red' }}>Please fill this field</p>
                  )}
                </div>

                <div className="inputWrapper">
                  <label for="firstName">Prenom </label>
                  <br />
                  <input
                    id="firstName"
                    name="firstName"
                    value={newUser.firstName}
                    onChange={onChangeHandler}
                  />
                  <br />
                  {errors.firstName && (
                    <p style={{ color: 'red' }}>Please fill this field</p>
                  )}
                </div>

                <div className="inputWrapper">
                  <label for="status">Etat </label>
                  <br />
                  <select
                    id="status"
                    name="status"
                    value={newUser.status}
                    onChange={onChangeHandler}
                  >
                    <option value="Rejeté">Rejeté</option>
                    <option value="Validé">Validé</option>
                    <option value="En validation">En validation</option>
                  </select>
                </div>

                <div className="inputWrapper">
                  <label for="userName">Nom d'utilisateur </label>
                  <br />
                  <input
                    id="userName"
                    name="userName"
                    value={newUser.userName}
                    onChange={onChangeHandler}
                  />
                  <br />
                  {errors.userName && (
                    <p style={{ color: 'red' }}>Please fill this field</p>
                  )}
                </div>

                <div className="inputWrapper">
                  <label for="createdDate">Date de Creation </label>
                  <br />
                  <input
                    type="date"
                    id="createdDate"
                    name="createdDate"
                    value={newUser.createdDate}
                    onChange={onChangeHandler}
                  />
                  <br />
                  {errors.createdDate && (
                    <p style={{ color: 'red' }}>Please fill this field</p>
                  )}
                </div>

                <div className="inputWrapper">
                  <label for="registrationNumber">
                    Numero d'enregistrement{' '}
                  </label>
                  <br />
                  <input
                    type="number"
                    id="registrationNumber"
                    name="registrationNumber"
                    value={newUser.registrationNumber}
                    onChange={onChangeHandler}
                  />
                  <br />
                  {errors.registrationNumber && (
                    <p style={{ color: 'red' }}>Please fill this field</p>
                  )}
                </div>
              </div>

              <div className="formSubmit">
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handSubmit}
                  style={{ backgroundColor: '#FDB64D' }}
                >
                  Enregistrez
                </Button>
              </div>
            </form>
          </Paper>
        </Fade>
      </Modal>
    </div>
  )
}

export default AddUserModal
