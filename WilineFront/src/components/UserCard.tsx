import { Card, Input, Button } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import { UserInterface } from '../interfaces/userInterface';

interface UserCardProps {
    user: UserInterface;
    setActionCard: React.Dispatch<React.SetStateAction<boolean>>;
    actionCard: boolean;
}

const UserCard: React.FC<UserCardProps> = ({
    user,
    setActionCard,
    actionCard,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState<UserInterface>({ ...user });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        try {
            const response = await axios.put(
                `http://localhost:8000/api/users/updateUser`,
                editedUser
            );
            setActionCard(!actionCard);
            console.log('User updated:', response.data);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleDeleteClick = async () => {
        try {
            const response = await axios.delete(
                'http://localhost:8000/api/users/deleteUser',
                { data: { _id: user._id } }
            );
            setActionCard(!actionCard);
            console.log('User deleted:', response.data);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleFieldChange = (
        fieldName: keyof UserInterface,
        value: string
    ) => {
        setEditedUser((prevUser: any) => ({
            ...prevUser,
            [fieldName]: value,
        }));
    };

    return (
        <Card style={{ width: 300 }}>
            {isEditing ? (
                <>
                    <Input
                        placeholder='First Name'
                        value={editedUser.firstname}
                        onChange={(e) =>
                            handleFieldChange('firstname', e.target.value)
                        }
                    />
                    <Input
                        placeholder='Last Name'
                        value={editedUser.lastname}
                        onChange={(e) =>
                            handleFieldChange('lastname', e.target.value)
                        }
                    />
                    <Input
                        placeholder='Email'
                        value={editedUser.email}
                        onChange={(e) =>
                            handleFieldChange('email', e.target.value)
                        }
                    />
                    <Input
                        placeholder='Phone Number'
                        value={editedUser.phonenumber}
                        onChange={(e) =>
                            handleFieldChange('phonenumber', e.target.value)
                        }
                    />
                    <Button onClick={handleSaveClick}>Save</Button>
                </>
            ) : (
                <>
                    <p>First Name: {user.firstname}</p>
                    <p>Last Name: {user.lastname}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone Number: {user.phonenumber}</p>
                    <Button onClick={handleEditClick}>Edit</Button>
                    <Button onClick={handleDeleteClick}>Delete</Button>
                </>
            )}
        </Card>
    );
};

export default UserCard;
