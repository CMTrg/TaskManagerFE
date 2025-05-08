import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UserList from "../UserList";
import SubmissionList from "./SubmissionList";
import EditTaskForm from "./EditTaskForm";
import SubmitFormModel from './SubmitFormModel';
import { deleteTask } from '../../../ReduxToolkit/TaskSlice';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const TaskCard = ({ item }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { auth } = useSelector(store => store);

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // ========== MODALS ==========
  const [OpenUserList, setOpenUserList] = useState(false);
  const [OpenSubmissionList, setOpenSubmissionList] = useState(false);
  const [OpenUpdateTaskForm, setOpenUpdateTaskForm] = useState(false);
  const [OpenSubmitFormModel, setOpenSubmitFormModel] = useState(false);

  const setTaskIdParam = () => {
    const updatedParams = new URLSearchParams(location.search);
    updatedParams.set("taskId", item.id);
    navigate(`${location.pathname}?${updatedParams.toString()}`);
  };

  const handleOpenUserList = () => {
    setTaskIdParam();
    setOpenUserList(true);
    handleMenuClose();
  };

  const handleOpenSubmissionList = () => {
    setTaskIdParam();
    setOpenSubmissionList(true);
    handleMenuClose();
  };

  const handleOpenUpdateTaskModel = () => {
    setTaskIdParam();
    setOpenUpdateTaskForm(true);
    handleMenuClose();
  };

  const handleOpenSubmitFormModel = () => {
    setTaskIdParam();
    setOpenSubmitFormModel(true);
    handleMenuClose();
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(item.id));
    handleMenuClose();
  };

  const handleCloseAllModals = () => {
    setOpenUserList(false);
    setOpenSubmissionList(false);
    setOpenUpdateTaskForm(false);
    setOpenSubmitFormModel(false);
  };

  return (
    <div>
      <div className='card lg:flex justify-between'>
        <div className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]'>
          <div className='lg:w-[7rem] lg:h-[7rem] object-cover'>
            <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-md" />
          </div>
          <div className='space-y-5'>
            <div className='space-y-2'>
              <h1 className='font-bold text-lg'>{item.title}</h1>
              <p className='text-gray-500 text-sm'>{item.description}</p>
            </div>
            <div className='flex flex-wrap gap-2 items-center'>
              {item.tags.map((tag, i) => (
                <span key={i} className='py-1 px-5 rounded-full techStack'>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <IconButton
            id="basic-button"
            aria-controls={openMenu ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? 'true' : undefined}
            onClick={handleMenuClick}
          >
            <MoreVertIcon />
          </IconButton>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            MenuListProps={{ 'aria-labelledby': 'basic-button' }}
          >
            {auth.user?.role === "ROLE_ADMIN" ? (
              <>
                <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
                <MenuItem onClick={handleOpenSubmissionList}>See Submissions</MenuItem>
                <MenuItem onClick={handleOpenUpdateTaskModel}>Edit</MenuItem>
                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
              </>
            ) : (
              <MenuItem onClick={handleOpenSubmitFormModel}>Submit</MenuItem>
            )}
          </Menu>
        </div>
      </div>

      {/* MODALS */}
      <UserList open={OpenUserList} handleClose={handleCloseAllModals} />
      <SubmissionList open={OpenSubmissionList} handleClose={handleCloseAllModals} />
      <EditTaskForm item={item} open={OpenUpdateTaskForm} handleClose={handleCloseAllModals} />
      <SubmitFormModel item={item} open={OpenSubmitFormModel} handleClose={handleCloseAllModals} />
    </div>
  );
};

export default TaskCard;
