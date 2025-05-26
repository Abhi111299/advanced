const authComponent = {
    component: {
        schemas: {
            addUserRequest: {
                type: 'object',
                properties: {
                username: {
                    type: 'string',
                    require: true,
                    description: 'enter user First Name',
                },
                email: {
                    type: 'string',
                    format: 'email',
                    require: true,
                    description: 'enter user Email',
                },
                password: {
                    type: 'string',
                    require: true,
                    description:
                    'enter password containing a uppercase ,lowercase and special character',
                },
                gender: {
                    type: 'string',
                    description: 'enter gender',
                },
                age: {
                    type: 'integer',
                    default: '',
                    description: 'enter user age',
                },
                location: {
                    type: 'string',
                    default: '',
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
            
        },
    },
};

export default authComponent;
