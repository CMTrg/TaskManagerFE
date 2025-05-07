import { IconButton } from '@mui/material';
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const role="ROLE_ADMIN"
const TaskCard = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
    const [OpenUserList,setOpenUserList]=useState(false);
    const handleCloseUserList=()=>{
        setOpenUserList(false)
    };
    const handleOpenUserList=()=>{
        setOpenUserList(true);
        handleMenuClose();
    };

    const [OpenSubmissionList,setOpenSubmissionList]=useState(false);
    const handleCloseSubmissionList=()=>{
        setOpenSubmissionList(false)
    };
    const handleOpenSubmissionList=()=>{
        SetOpenSubmissionList(true);
        handleMenuClose();
    };
    const [OpenUpdateTaskForm,setOpenUpdateTaskForm]=useState(false);
    const handleCloseUpdateTaskForm=()=>{
        setOpenUpdateTaskForm(false)
    };
    const handleOpenUpdateTaskModel=()=>{
        setOpenUpdateTaskForm(true);
        handleMenuClose();
    };
    const handleDeleteTask=()=>{
        
        handleMenuClose()
    };

    return (
        <div>
            <div className='card lg:flex justify-between'>
                <div className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]'>
                    <div className='lg:w- [7rem] lg:h-[7rem] object-cover'>
                        <img src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/445389252_2147342955611497_3749755295331241284_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeECra5xmIvnI-ULPeThtN517mQ0c7cYi0juZDRztxiLSPqd0AvXu6n6Rc1nJsZC8QBDqpr7GAiB8nMU6Bl0pHCN&_nc_ohc=m6sullwB-CYQ7kNvwFcZNOh&_nc_oc=AdnL3cIqEf7nGHUECbFX2YaRxYD8v0keIa0tqIS13Qoc1RtExIR23lBM-R6BFJlfBD8&_nc_zt=24&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=A3TMWTgYWmg_7A9iMmrFrA&oh=00_AfH8aSvoTKPkRrK2unJL2dNYNyhStVVRxuC2tlDjAvXptA&oe=680FD71B" alt="" />
                    
                    </div>
                    <div className='space-y-5'>
                        <div className='space-y-2'>
                            <h1 className='font-bold text-lg'>Car Rental Website</h1>
                            <p className='text-gray-500 text-sm'>use lastest framworks and technology to make this website</p>
                        
                        </div>
                        
                        <div className='flex flex-wrap gap-2 items-center'>

                            {[1,1,1,1].map((item)=><span className='py-1 px-5 rounded-full techStack'>
                                Angular
                            </span>)}
                        </div>
                    </div>
                </div>
                <div>
                    <IconButton 
                    id="basic-button"
                    aria-controls={openMenu ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={handleMenuClick}>
                        <MoreVertIcon/>
                    </IconButton>
                    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {role==="ROLE_ADMIN" ? (
            <>
                <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
                <MenuItem onClick={handleOpenSubmissionList}>See Submissions</MenuItem>
                <MenuItem onClick={handleOpenUpdateTaskModel}>Edit</MenuItem>
                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
            </>
            ) : (
            <></>
        )}
                    </Menu>
                </div>
            </div>
            <UserList open={OpenUserList} handleCLose={handleCloseUserList}/>
            <SubmissionList open={openSubmissionList} handleClose={handleCloseSubmissionList}/>
            <EditTaskForm open={OpenUpdateTaskForm} handleClose={handleCloseUpdateTaskForm}/>
        </div>
    );
};

export default TaskCard;