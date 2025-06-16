'use client';
import { useTheme } from '@mui/material/styles';
import { Typography, Box, Divider } from '@mui/material';
import { ProjectCard } from './ProjectCard';
import { useEffect } from 'react';

const AWSProjects = () => {
  const theme = useTheme();

  // Use useEffect to add animation styles safely on the client side
  useEffect(() => {
    // Animation is now defined in global.css
    // This avoids the CSSStyleSheet error during server-side rendering
  }, []);

  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          animation: 'fadeInUp 1s ease-in-out',
          mb: 2,
          textAlign: 'center',
          background: `linear-gradient(45deg, ${
            theme.palette.mode === 'dark' ? '#00bcd4' : '#0288d1'
          } 30%, ${theme.palette.mode === 'dark' ? '#4dd0e1' : '#4fc3f7'} 90%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: { xs: '2rem', sm: '2.5rem' },
        }}
      >
        AWS Projects
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Allows cards to wrap if they exceed container width
          justifyContent: 'center',
          gap: 2,
          paddingBottom: '16px',
        }}
      >
        <ProjectCard
          title="IAM User with Limited Permissions"
          description="Set up an IAM user with read-only access to an S3 bucket, created a policy restricting access to S3 and Lambda, tested with AWS CLI, and documented the policy JSON and permissions screenshot."
          sx={{
            p: { xs: 2, sm: 3 },
            maxWidth: { xs: '100%', sm: '400px' },
            minWidth: { xs: '300px', sm: '400px' },
            backgroundColor: 'background.paper',
            color: 'text.primary',
            borderRadius: '12px',
            animation: 'fadeInUp 1s ease-in-out',
            flexShrink: 0,
          }}
        />
        <ProjectCard
          title="Host a Static Website on S3"
          description="Created an S3 bucket, enabled static website hosting, uploaded an HTML file with CSS and images, configured public read access, and shared the S3 website URL and bucket configuration screenshot."
          sx={{
            p: { xs: 2, sm: 3 },
            maxWidth: { xs: '100%', sm: '400px' },
            minWidth: { xs: '300px', sm: '400px' },
            backgroundColor: 'background.paper',
            color: 'text.primary',
            borderRadius: '12px',
            animation: 'fadeInUp 1s ease-in-out',
            flexShrink: 0,
          }}
        />
        <ProjectCard
          title="Deploy a Simple Node.js App on EC2"
          description="Launched a t2.micro EC2 instance, installed Node.js, deployed an Express app with a 'Hello, AWS' endpoint, configured security groups for port 80, and provided the public IP and EC2 dashboard screenshot."
          sx={{
            p: { xs: 2, sm: 3 },
            maxWidth: { xs: '100%', sm: '400px' },
            minWidth: { xs: '300px', sm: '400px' },
            backgroundColor: 'background.paper',
            color: 'text.primary',
            borderRadius: '12px',
            animation: 'fadeInUp 1s ease-in-out',
            flexShrink: 0,
          }}
        />
        <ProjectCard
          title="Build a Serverless API with Lambda and API Gateway"
          description="Created a Lambda function in Node.js returning a JSON response, set up an API Gateway endpoint, tested with Postman, and shared the API Gateway URL and Lambda code snippet."
          sx={{
            p: { xs: 2, sm: 3 },
            maxWidth: { xs: '100%', sm: '400px' },
            minWidth: { xs: '300px', sm: '400px' },
            backgroundColor: 'background.paper',
            color: 'text.primary',
            borderRadius: '12px',
            animation: 'fadeInUp 1s ease-in-out',
            flexShrink: 0,
          }}
        />
        <ProjectCard
          title="Distribute S3 Content via CloudFront"
          description="Used the S3 bucket from the static website, created a CloudFront distribution, accessed via the CloudFront URL, compared load times, and documented the setup with the distribution URL."
          sx={{
            p: { xs: 2, sm: 3 },
            maxWidth: { xs: '100%', sm: '400px' },
            minWidth: { xs: '300px', sm: '400px' },
            backgroundColor: 'background.paper',
            color: 'text.primary',
            borderRadius: '12px',
            animation: 'fadeInUp 1s ease-in-out',
            flexShrink: 0,
          }}
        />
      </Box>
      <Divider sx={{ my: 2 }} />
    </>
  );
};

// Animation is handled through MUI's sx prop instead of direct CSS manipulation
// This avoids the CSSStyleSheet error during server-side rendering

export default AWSProjects;