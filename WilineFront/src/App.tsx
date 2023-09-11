import CreateUser from './components/CreateUser';
import axios from 'axios';
import { useState, useEffect } from 'react';
import UserCard from './components/UserCard';
import { UserInterface } from './interfaces/userInterface';
import SearchUser from './components/SearchUser';

function App() {
    const [userData, setUserData] = useState<UserInterface[] | null>(null);
    const [actionCard, setActionCard] = useState(false);

    useEffect(() => {
        getAllUsers();
    }, [actionCard]);

    const getAllUsers = async () => {
        try {
            const response = await axios.get(
                'http://localhost:8000/api/users/getAllUsers'
            );
            setUserData(response.data);
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

    return (
        <div>
            <div className='flex flex-row justify-center gap-[20px] pb-[130px] pt-[40px]'>
                <CreateUser
                    setActionCard={setActionCard}
                    actionCard={actionCard}
                />
                <SearchUser setUserData={setUserData} />
            </div>
            <div className='flex flex-row justify-center'>
                {userData !== null &&
                    userData.map((user) => {
                        return (
                            <UserCard
                                key={user._id}
                                user={user}
                                setActionCard={setActionCard}
                                actionCard={actionCard}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

export default App;
