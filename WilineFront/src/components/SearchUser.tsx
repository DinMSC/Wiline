import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { UserInterface } from '../interfaces/userInterface';

type FieldType = {
    firstname?: string;
    lastname?: string;
    email?: string;
    phoneNumber?: string;
};
interface Actions {
    setUserData: React.Dispatch<React.SetStateAction<UserInterface[] | null>>;
}
const SearchUser: React.FC<Actions> = ({ setUserData }) => {
    const onFinish = async (values: any) => {
        try {
            const response = await axios.get(
                'http://localhost:8000/api/users/getAllUsers',
                {
                    params: values,
                }
            );
            setUserData(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='w-[380px]'>
            <div className='block rounded-lg bg-white p-6 bg-green-400'>
                <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
                    Search User
                </h5>

                <Form
                    name='basic'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'
                >
                    <Form.Item<FieldType> label='First Name' name='firstname'>
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType> label='Last Name' name='lastname'>
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType> label='Email' name='email'>
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType> label='Phone Numb' name='phoneNumber'>
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button
                            type='primary'
                            htmlType='submit'
                            className='bg-red-400'
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default SearchUser;
