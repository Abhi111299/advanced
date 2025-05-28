const authComponent = {
    component: {
        schemas: {
            addUserRequest: {
                type: 'object',
                properties: {
                username: {
                    type: 'string',
                    example: 'Rahul',
                    require: true,
                    description: 'enter user First Name',
                },
                email: {
                    type: 'string',
                    format: 'email',
                    example: 'abc@gmail.com',
                    require: true,
                    description: 'enter user Email',
                },
                password: {
                    type: 'string',
                    require: true,
                    example: 'password@123',
                    description:
                    'enter password containing a uppercase ,lowercase and special character',
                },
                gender: {
                    type: 'string',
                    example: 'male',
                    description: 'enter gender',
                },
                age: {
                    type: 'integer',
                    default: '',
                    example: 23,
                    description: 'enter user age',
                },
                location: {
                    type: 'string',
                    default: '',
                    example: "Mumbai",
                    description: 'enter user location',
                },
                },
            },
            userLogin: {
                type: 'object',
                required: ['password'],
                properties: {
                email: {
                    type: 'string',
                    description: 'User Email',
                },
                password: {
                    type: 'string',
                    description: 'User Password',
                },
                },
            },
            getAuthResponse: {
                type: 'object',
                properties: {
                status: {
                    type: 'string',
                    description: 'success | error',
                },
                data: {
                    type: 'object',
                },
                message: { type: 'string' },
                },
                required: ['status', 'data'],
            },
            forgotPassword: {
                type: 'object',
                required: ['email'],
                properties: {
                email: {
                    type: 'string',
                    example: 'abc@gmail.com',
                    description: 'User Email',
                }
                },
            },
            verifyOtp: {
                type: 'object',
                required: ['email'],
                properties: {
                email: {
                    type: 'string',
                    example: 'abc@gmail.com',
                    description: 'User Email for verify OTP',
                },
                otp: {
                    type: 'integer',
                    example: 145454,
                    description: 'OTP verify for forgot password',
                }
                },
            },
            resetPassword: {
                type: 'object',
                required: ['email'],
                properties: {
                uuid: {
                    type: 'string',
                    example: 'aasfemdfj7632sd-skdjd',
                    description: 'uuid for reset password',
                },
                password: {
                    type: 'string',
                    example: "password@123",
                    description: 'New password that wanted to set now',
                },
                confirmPassword: {
                    type: 'string',
                    example: "password@123",
                    description: 'same as password field',
                }
                }
            }
            
        },
    },
};

export default authComponent;
