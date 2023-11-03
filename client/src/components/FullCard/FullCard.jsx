import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function FullCard({ user }) {
    return (
        <Card
            sx={{
                width: 500,
                height: 488,
                borderRadius: '16px',
                padding: '24px',
            }}
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
                        marginBottom: '40px',
                    }}
                >
                    {user.name}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginBottom: 1,
                            marginRight: '40px',
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Proxima Nova',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '24px',
                                color: '#262C40',
                                marginBottom: '14px',
                            }}
                        >
                            Телефон:
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Proxima Nova',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '24px',
                                color: '#262C40',
                                marginBottom: '14px',
                            }}
                        >
                            Почта:
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Proxima Nova',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '24px',
                                color: '#262C40',
                                marginBottom: '14px',
                            }}
                        >
                            Дата приема:
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Proxima Nova',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '24px',
                                color: '#262C40',
                                marginBottom: '14px',
                            }}
                        >
                            Должность:
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Proxima Nova',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '24px',
                                color: '#262C40',
                                marginBottom: '14px',
                            }}
                        >
                            Подразделение:
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginBottom: 1,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#8189A3',
                                marginBottom: '14px',
                                marginTop: '24px',
                            }}
                        >
                            {user.phone}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#8189A3',
                                marginBottom: '14px',
                            }}
                        >
                            {user.email}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#8189A3',
                                marginBottom: '14px',
                            }}
                        >
                            {user.hire_date}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#8189A3',
                                marginBottom: '14px',
                            }}
                        >
                            {user.position_name}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '20px',
                                color: '#8189A3',
                                marginBottom: '14px',
                            }}
                        >
                            {user.department}
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '40px',
                        marginBottom: '14px',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Proxima Nova',
                            fontSize: '18px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '24px',
                            color: '#262C40',
                        }}
                    >
                        Дополнительная информация:
                    </Typography>
                </Box>

                <Typography
                    sx={{
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '20px',
                        color: '#8189A3',
                    }}
                >
                    Разработчики используют текст в качестве заполнителя макета
                    страницы. Разработчики используют текст в качестве
                    заполнителя макета страницы.
                </Typography>
            </CardContent>
        </Card>
    );
}
