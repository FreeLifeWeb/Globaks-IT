import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function UserCard({ user, onClick }) {
    return (
        <Card
            sx={{
                minWidth: 357,
                minHeight: 314,
                borderRadius: '16px',
                cursor: 'pointer',
            }}
            onClick={() => onClick(user)}
        >
            <CardContent>
                <Typography
                    variant='h5'
                    component='div'
                    sx={{
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '30px',
                    }}
                >
                    {user.name}
                </Typography>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}
                >
                    <PhoneIphoneIcon
                        sx={{
                            marginRight: 1,
                            color: '#432EAB',
                        }}
                    />
                    <Typography
                        variant='body2'
                        sx={{
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#8189A3',
                        }}
                    >
                        {user.phone}
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}
                >
                    <MailOutlineIcon
                        sx={{ marginRight: 1, color: '#432EAB' }}
                    />
                    <Typography
                        variant='body2'
                        sx={{
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '20px',
                            color: '#8189A3',
                        }}
                    >
                        {user.email}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default UserCard;
