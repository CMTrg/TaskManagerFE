import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SubmissionCard from './SubmissionCard';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchSubmissionByTaskId } from '../../../ReduxToolkit/TaskSlice'; // 👈 sửa đúng path nếu cần

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SubmissionList({ handleClose, open }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("taskId");
  const { submissions } = useSelector((store) => store.submission); // 👈 kiểm tra slice name

  React.useEffect(() => {
    if (taskId) {
      dispatch(fetchSubmissionByTaskId(taskId));
    }
  }, [taskId]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div>
          {submissions && submissions.length > 0 ? (
            <div className="space-y-2">
              {submissions.map((item) => (
                <SubmissionCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center">No Submission Found</div>
          )}
        </div>
      </Box>
    </Modal>
  );
}
