import React from "react"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Button, IconButton } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const SubmissionCard = () => {
    const handleAcceptDecline = (status) => {
        console.log(status)
    }
    return (
        <div className='rounded-md bg-black p-5 flex items-center justify-between'>
            <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                    <span>Git hub : </span>
                    <div className='flex items-center gap-2 text-[#c24dd0]'>
                        <OpenInNewIcon/>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            Go To Link
                        </a>

                    </div>

                </div>
                <div className="flex items-center gap-2 text-xs">
                    <p>Submission Time : </p>
                    <P className="text-gray-400"> 30-4-1975</P>

                </div>

            </div>
            <div>
                {
                    true?<div className="flex gap-5">
                        <div className="text-green-500">
                            <IconButton color="success" onClick={()=>handleAcceptDecline("ACCEPTED")}>
                                <CheckIcon/>
                            </IconButton>

                        </div>
                        <div className="text-red-500">
                            <IconButton color="error" onClick={()=>handleAcceptDecline("DECLINED")}>
                                <CloseIcon/>
                            </IconButton>
                        </div>

                    </div>:<Button color={true?"success":"error"} size="small" variant="outlined">
                        Accept
                    </Button>
                }
            </div>
        </div>
    )
}

export default SubmissionCard