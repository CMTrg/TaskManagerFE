import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { assignedTaskToUser } from '../../ReduxToolkit/TaskSlice';
import { getUserList } from '../../ReduxToolkit/AuthSlice'; // ✅ Sửa tên đúng
import { useLocation } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 2,
};

export default function UserList({ handleClose, open }) {
  const dispatch = useDispatch();
  const { auth } = useSelector(store => store);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("taskId");

  React.useEffect(() => {
    dispatch(getUserList(localStorage.getItem("jwt")));
  }, [dispatch]);

  const handleAssignedTask = (user) => {
    dispatch(assignedTaskToUser({ userId: user.id, taskId }));
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        {
          auth.users.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className='flex items-center justify-between w-full py-2'>
                <div>
                  <ListItem disableGutters>
                    <ListItemAvatar>
                      <Avatar src={item.avatar || ""} />
                    </ListItemAvatar>
                    <ListItemText
                      secondary={`@${item.fullName.split(" ").join("_").toLowerCase()}`}
                      primary={item.fullName}
                    />
                  </ListItem>
                </div>
                <div>
                  <Button onClick={() => handleAssignedTask(item)} className='custumeButton'>Select</Button>
                </div>
              </div>
              {index !== auth.users.length - 1 && <Divider />}
            </React.Fragment>
          ))
        }
      </Box>
    </Modal>
  );
}
