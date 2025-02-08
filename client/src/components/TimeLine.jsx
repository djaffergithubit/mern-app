import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion"
import { AiOutlineCloudUpload } from "react-icons/ai";  
import { FaRobot } from "react-icons/fa";  
import { MdWork } from "react-icons/md";  
import { BiBarChart } from "react-icons/bi";  
import { TbChecklist } from "react-icons/tb";  

const TimeLine = () => {
  return (
    <Timeline position="alternate" sx={{ width: '100%', height: '100%', flexGrow: 1 }}>
      {/* Step 1: Upload Resume */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <AiOutlineCloudUpload size={24} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
            sx={{ py: '30px', px: 2 }}
        >
          <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 'bold' }} className=' text-deepTeal' component="span">
            Upload Your Resume
          </Typography>
          <Typography sx={{ fontSize: '13px', fontWeight: '100', color: 'gray' }}> Upload your existing resume and AI scans & highlights missing keywords, formatting issues, and grammar mistakes.</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Step 2: AI Enhances Resume */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <FaRobot size={24} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 'bold' }} className=' text-deepTeal' component="span">
            AI Enhances Your Resume & Cover Letter
          </Typography>
          <Typography sx={{ fontSize: '13px', fontWeight: '100', color: 'gray' }} >Our AI fine-tunes your resume for ATS optimization, grammar checks, and keyword enhancements.
          Instantly generate a personalized cover letter based on your job description.</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Step 3: AI Job Match */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <MdWork size={24} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 'bold' }} className=' text-deepTeal' component="span">
            Find the Best Job Matches
          </Typography>
          <Typography sx={{ fontSize: '13px', fontWeight: '100', color: 'gray' }} > AI recommends jobs tailored to your skills, experience, and preferences.
          Save jobs, track applications, and apply with one click.</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Step 4: Resume Score & Feedback */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success">
            <BiBarChart size={24} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 'bold' }} className=' text-deepTeal' component="span">
            Resume Score & Instant Feedback
          </Typography>
          <Typography sx={{ fontSize: '13px', fontWeight: '100', color: 'gray' }} > AI analyzes & scores your resume, giving instant feedback to improve your chances of getting hired.
          Fix weak points and optimize for better ATS compatibility.</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Step 5: Application Tracker */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="warning">
            <TbChecklist size={24} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 'bold' }} className=' text-deepTeal' component="span">
            Track Your Applications
          </Typography>
          <Typography sx={{ fontSize: '13px', fontWeight: '100', color: 'gray' }} > Stay organized with our Application Tracker.
          Get real-time updates on job application status, interviews, and follow-ups.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default TimeLine;