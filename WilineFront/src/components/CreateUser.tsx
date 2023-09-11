import { Button, Form, Input } from 'antd';
import axios from 'axios';

type FieldType = {
    firstname?: string;
    lastname?: string;
    email?: string;
    phonenumber?: string;
};
interface Actions {
    setActionCard: React.Dispatch<React.SetStateAction<boolean>>;
    actionCard: boolean;
}

const CreateUser: React.FC<Actions> = ({ actionCard, setActionCard }) => {
    const onFinish = async (values: any) => {
        try {
            await axios.post(
                'http://localhost:8000/api/users/createUser',
                values
            );
            setActionCard(!actionCard);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='w-[380px]'>
            <div className='block rounded-lg bg-white p-6 bg-blue-400'>
                <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
                    Create User
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
                    <Form.Item<FieldType>
                        label='First Name'
                        name='firstname'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label='Last Name'
                        name='lastname'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Last name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label='Email'
                        name='email'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label='Phone Numb'
                        name='phonenumber'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phonenumber!',
                            },
                        ]}
                    >
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

export default CreateUser;
