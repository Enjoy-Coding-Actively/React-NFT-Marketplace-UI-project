import React from 'react'
import { Box } from '@mui/material'
import { Typography } from '../../components/index'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../theme/types'

export interface TimelineProps {
  checked: boolean
  title: string
}

export const Timeline: React.FC<TimelineProps> = ({ children, ...props }) => {
  const { checked, title } = props
  const classes = useStyles()

  if (checked) {
    console.log('checked')
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Checked = (): any => {
    const isChecked = props.checked
    if (isChecked) {
      return <Box className={classes.statusCirle}></Box>
    }
    return <></>
  }

  return (
    <>
      <Box className={classes.timelineWrapper}>
        <Box className={classes.statusWrapper}>
          <Checked />
          <Box className={classes.statusLine}></Box>
        </Box>
        <Box className={classes.cardWrapper}>
          <Box className={classes.cardHeadline}>
            <Typography variant='h6'>{title}</Typography>
          </Box>
          <Box className={classes.cardText}>
            <Typography>{children}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    timelineWrapper: {
      display: 'flex',
      gap: '20px',
      // custom styling for looping elements
      '& + $timelineWrapper': {
        marginTop: '20px'
      },
      '& + $timelineWrapper:last-child $statusWrapper $statusLine': {
        bottom: 'calc(100% - 40px)'
      },
      '& + $timelineWrapper $statusWrapper $statusLine': {
        top: '-30px'
      }
    },
    statusWrapper: {
      position: 'relative',
      flexBasis: '20px',
      minWidth: '20px'
    },
    statusCirle: {
      width: '20px',
      height: '20px',
      borderRadius: '20px',
      background: theme.palette.primary.main,
      position: 'absolute',
      left: 0,
      top: '24px',
      zIndex: 1
    },
    statusLine: {
      width: '1px',
      position: 'absolute',
      left: '50%',
      top: '30px',
      bottom: '0',
      transform: 'translateX(-50%)',
      background: '#ffffff'
    },
    cardWrapper: {
      padding: '20px',
      background: theme.palette.text.secondary,
      color: '#ffffff',
      flexGrow: 1,
      // prettier-ignore
      clipPath: 'polygon(20px 0, 0 20px, 0 100%, calc(100% - 20px) 100%, 100% calc(100% - 20px), 100% 0)'
    },
    cardHeadline: {
      marginBottom: '20px'
    },
    cardText: {
      color: '#fff'
    }
  }
})
