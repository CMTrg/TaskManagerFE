import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { assignedTaskToUser } from '../../ReduxToolkit/TaskSlice';
import { useLocation } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline:"none",
  boxShadow: 24,
  p: 2,
};

const tasks=[1,1,1,1]

export default function UserList({handleClose,open}) {

  const dispatch=useDispatch();
  const {auth}=useSelector(store=>store);
  const location=useLocation();
  const queryParams=new URLSearchParams(location.search);
  const taskId=queryParams.get("taskId");

  React.useEffect((item)=>{
    dispatch(getUSerList(localStorage.getItem("jwt")))
  },{})

  const handleAssignedTask=(user)=>{
    dispatch(assignedTaskToUser({userId:user.id,taskId:taskId}))
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            auth.users.map((item,index)=>
            <><div className='flex items=center justify-between w-full'>
            <div>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src='https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/487118027_2385934148419042_5625362821472460103_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGM6uesGfBD2R-LkDORcNhWRgMDDSVZeR9GAwMNJVl5H4GjTGT8kohJKdrSVAL18kTMZY_KKcWQ0SukGhhlv4hx&_nc_ohc=uiw6f03H6kwQ7kNvwGVM_U2&_nc_oc=AdnbwQeML41x_lBrvgFoEXHSaA8xhC8tY_bcQC1xu0kz6yGQanewPW-AduL09e2-KMo&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=bYOrUbkwj_Gngt4Mjwi1vQ&oh=00_AfF0JW1nivVYnGBuUsTc72yFZwK6theqlpPNiIPH5Inwhw&oe=680FE715'/>
                    </ListItemAvatar>
                    <ListItemText 
                    secondary={`@${item.fullName.split(" ").join("_").toLowerCase()}`}
                    primary={item.fullName}/>
                </ListItem>
            </div>
            <div>
                <Button onClick={()=>handleAssignedTask(item)} className='custumeButton'>select</Button>
            </div>

            

        </div>
        {index!==tasks.length-1 && <Divider variant='insert'/>}
        </>
            )
          }
          
        </Box>
      </Modal>
    </div>
  );
}
