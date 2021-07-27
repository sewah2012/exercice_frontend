import {
  IconButton,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import moment from 'moment'
import StatusButton from './StatusButton'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

const UserList = ({ userList, deleteUser }) => {
  const classes = useStyles()

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Date Created</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">registration Number</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell align="left">
                  {moment(user.createdDate).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell align="left">
                  <StatusButton status={user.status} />
                </TableCell>
                <TableCell align="left">{user.firstName}</TableCell>
                <TableCell align="left">{user.lastName}</TableCell>
                <TableCell align="left">{user.registrationNumber}</TableCell>
                <TableCell align="left">
                  <IconButton
                    onClick={() => {
                      deleteUser(user.id)
                    }}
                  >
                    <DeleteIcon fontSize="medium" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default UserList
