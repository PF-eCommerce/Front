import React from 'react'
import {Link} from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Error404() {
  return (
    <div>
        <>
            <Box
            component="main"
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexGrow: 1,
                minHeight: '100%'
            }}
            >
            <Container maxWidth="md">
                <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}
                >
                <Typography
                    align="center"
                    color="blueviolet"
                    variant="h3"
                >
                    404: The page you are looking for isn’t here
                </Typography>
                <Typography
                    align="center"
                    color="textPrimary"
                    variant="subtitle2"
                >
                    You either tried some shady route or you came here by mistake.
                    Whichever it is, try using the navigation
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                    <img
                    alt="Under development"
                    src="/img/errorPue.svg"
                    style={{
                        marginTop: 50,
                        display: 'inline-block',
                        maxWidth: '100%',
                        width: 560
                    }}
                    />
                </Box>
                <Link to='/' >
                    <Button
                        component="a"
                        startIcon={(<ArrowBackIcon fontSize="small" />)}
                        sx={{ mt: 3 }}
                        variant="contained"
                        color='secondary'
                    >
                        Go back
                    </Button>
                </Link>
                </Box>
            </Container>
            </Box>
        </>
    </div>
  )
}

export default Error404