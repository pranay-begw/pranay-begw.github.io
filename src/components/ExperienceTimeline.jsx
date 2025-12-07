import React, { useState, useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import '../styles/ExperienceTimeline.css';

const ExperienceTimeline = ({ experiences }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    // Animate items one by one
    experiences.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * 300); // 300ms delay between each item
    });
  }, [experiences]);

  // Mobile layout: logos on left, content on right, full width
  if (isMobile) {
    return (
      <Box sx={{ 
        bgcolor: 'transparent',
        padding: '20px 0',
        width: '100%'
      }}>
        {experiences.map((exp, index) => {
          const isVisible = visibleItems.includes(index);
          
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                width: '100%',
                mb: 3,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              {/* Logo on the left */}
              <Box
                sx={{
                  flexShrink: 0,
                  width: '80px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mr: 2
                }}
              >
                <Box
                sx={{
                  bgcolor: 'white',
                  border: '3px solid var(--teal-accent)',
                  boxShadow: (theme) => `0 0 10px ${theme.palette.primary.main}40`,
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                    overflow: 'hidden',
                    mb: 1
                  }}
                >
                  <img 
                    src={exp.logo} 
                    alt={exp.company} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '50%'
                    }}
                  />
                </Box>
                {index < experiences.length - 1 && (
                  <Box
                    sx={{
                    width: '2px',
                    height: '100%',
                    minHeight: '40px',
                    bgcolor: 'var(--teal-accent)',
                      mt: 1
                    }}
                  />
                )}
              </Box>
              
              {/* Content on the right */}
              <Box
                sx={{
                  flex: 1,
                  bgcolor: '#242424',
                  padding: '15px',
                  borderRadius: '8px',
                  borderLeft: '3px solid var(--teal-accent)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  textAlign: 'left',
                  width: '100%',
                  '&:hover': {
                    transform: 'translateX(5px)',
                    boxShadow: '-5px 5px 10px rgba(0, 179, 179, 0.1)'
                  }
                }}
              >
                <Typography 
                  variant="h6" 
                  component="span" 
                  sx={{ 
                    color: 'var(--teal-accent)',
                    fontWeight: 'bold',
                    display: 'block',
                    mb: 1
                  }}
                >
                  {exp.role}
                </Typography>
                
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#b3b3b3',
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5
                  }}
                >
                  <i className="fas fa-map-marker-alt" style={{ color: 'var(--teal-accent)', fontSize: '14px' }}></i>
                  {exp.company} - {exp.location}
                </Typography>

                {exp.date && (
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#b3b3b3',
                      mb: 2,
                      fontSize: '0.85rem'
                    }}
                  >
                    {exp.date}
                  </Typography>
                )}

                <Box component="div" sx={{ mt: 1.5 }}>
                  {Array.isArray(exp.details) ? (
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0 
                    }}>
                      {exp.details.map((detail, idx) => (
                        <li 
                          key={idx}
                          style={{
                            position: 'relative',
                            paddingLeft: '20px',
                            marginBottom: '8px',
                            color: '#ffffff',
                            lineHeight: '1.6'
                          }}
                        >
                          <span style={{
                            content: '"•"',
                            color: 'var(--teal-accent)',
                            position: 'absolute',
                            left: 0
                          }}>•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                      {exp.details}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    );
  }

  // Desktop layout: alternating timeline
  return (
    <Box sx={{ 
      bgcolor: 'transparent',
      padding: '20px 0',
      '& .MuiTimeline-root': {
        padding: 0
      }
    }}>
      <Timeline position="alternate">
        {experiences.map((exp, index) => {
          const isVisible = visibleItems.includes(index);
          
          return (
            <TimelineItem 
              key={index}
              sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              <TimelineOppositeContent
                sx={{ 
                  m: 'auto 0',
                  flex: 0.3,
                  px: 2
                }}
                align={index % 2 === 0 ? 'right' : 'left'}
                variant="body2"
                color="text.secondary"
              >
                <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                  {exp.date || exp.period}
                </Typography>
              </TimelineOppositeContent>
              
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'var(--teal-accent)' }} />
                <TimelineDot 
                  sx={{ 
                    bgcolor: 'white',
                    border: '3px solid var(--teal-accent)',
                    boxShadow: (theme) => `0 0 10px ${theme.palette.primary.main}40`,
                    width: 56,
                    height: 56,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px',
                    borderRadius: '50%',
                    overflow: 'hidden'
                  }}
                >
                  <img 
                    src={exp.logo} 
                    alt={exp.company} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '50%'
                    }}
                  />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'var(--teal-accent)' }} />
              </TimelineSeparator>
              
              <TimelineContent sx={{ py: '12px', px: 2, flex: 0.7 }}>
                <Box
                  sx={{
                    bgcolor: '#242424',
                    padding: '20px',
                    borderRadius: '8px',
                    borderLeft: '3px solid var(--teal-accent)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    textAlign: 'left',
                    '&:hover': {
                      transform: 'translateX(5px)',
                      boxShadow: '-5px 5px 10px rgba(0, 179, 179, 0.1)'
                    }
                  }}
                >
                  <Typography 
                    variant="h6" 
                    component="span" 
                    sx={{ 
                      color: 'var(--teal-accent)',
                      fontWeight: 'bold',
                      display: 'block',
                      mb: 1
                    }}
                  >
                    {exp.role}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#b3b3b3',
                      mb: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5
                    }}
                  >
                    <i className="fas fa-map-marker-alt" style={{ color: 'var(--teal-accent)', fontSize: '14px' }}></i>
                    {exp.company} - {exp.location}
                  </Typography>

                  {exp.date && (
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#b3b3b3',
                        mb: 2,
                        fontSize: '0.85rem'
                      }}
                    >
                      {exp.date}
                    </Typography>
                  )}

                  <Box component="div" sx={{ mt: 1.5 }}>
                    {Array.isArray(exp.details) ? (
                      <ul style={{ 
                        listStyle: 'none', 
                        padding: 0, 
                        margin: 0 
                      }}>
                        {exp.details.map((detail, idx) => (
                          <li 
                            key={idx}
                            style={{
                              position: 'relative',
                              paddingLeft: '20px',
                              marginBottom: '8px',
                              color: '#ffffff',
                              lineHeight: '1.6'
                            }}
                          >
                            <span style={{
                              content: '"•"',
                              color: 'var(--teal-accent)',
                              position: 'absolute',
                              left: 0
                            }}>•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                        {exp.details}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Box>
  );
};

export default ExperienceTimeline;

