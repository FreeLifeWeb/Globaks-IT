import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UserCard } from './components/Card/Card';
import SearchInput from './components/Search/SearchInput';
import Box from '@mui/material/Box';
import { MyModal } from './components/MyModal/MyModal';
import { FullCard } from './components/FullCard/FullCard';

function App() {
    const [users, setUsers] = useState([]);
    const [modal, setModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        async function fetchUsers() {
            const url = 'http://127.0.0.1:3001';
            const result = await axios.get(url);
            setUsers(result.data);
        }
        fetchUsers();
    }, []);

    const openModal = (user) => {
        setSelectedUser(user);
        setModal(true);
    };

    const closeModal = () => {
        setSelectedUser(null);
        setModal(false);
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    maxWidth: '1280px',
                    overflow: 'auto',
                    background: 'white',
                    padding: '25px',
                    boxSizing: 'border-box',
                }}
            >
                <div
                    style={{
                        maxWidth: '100%',
                        top: '0',
                        width: '95%',
                        padding: '25px',
                        boxSizing: 'border-box',
                        margin: '32px',
                        zIndex: '1',
                    }}
                >
                    <SearchInput filteredUsers={setUsers} />
                    <MyModal
                        visible={modal}
                        setVisible={closeModal}
                    >
                        {selectedUser && <FullCard user={selectedUser} />}
                    </MyModal>
                </div>
                <div style={{ marginTop: '100px' }}>
                    {users.length === 0 ? (
                        <p>No users found.</p>
                    ) : (
                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            flexWrap='wrap'
                            gap='25px'
                        >
                            {users.map((user, index) => (
                                <UserCard
                                    onClick={() => openModal(user)}
                                    key={index + 1}
                                    user={user}
                                />
                            ))}
                        </Box>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
