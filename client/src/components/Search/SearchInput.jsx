import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

function SearchInput({ filteredUsers }) {
    const [input, setInput] = React.useState('');

    const filterAction = (e) => {
        e.preventDefault();

        const url = `http://127.0.0.1:3001?term=${input}`;
        axios
            .get(url)
            .then((response) => {
                filteredUsers(response.data);
                setInput('');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <form onSubmit={filterAction}>
            <TextField
                variant='outlined'
                size='small'
                fullWidth
                placeholder='Поиск...'
                name='input'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <SearchIcon sx={{ color: '#432EAB' }} />
                        </InputAdornment>
                    ),
                    style: {
                        borderRadius: '20px',
                    },
                }}
            />
        </form>
    );
}

export default SearchInput;
