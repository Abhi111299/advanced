const adminComponent = {
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
                role: {
                    type: 'string',
                    default: '',
                    example: "EMPLOYEE",
                    description: 'enter user type',
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
        },
    },
};

export default adminComponent;
