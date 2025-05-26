import authComponent from "./component.js";
const {
    component: {
        schemas: {
            addUserRequest, getAuthResponse, userLogin
        },
    },
} = authComponent;

    const auth = {
        '/register': {
            post: {
            tags: ['Auth'],
            summary: 'Register User api to create a new user',
            description: 'This API allows add a new user.',
            operationId: 'addUser',
            requestBody: {
                required: ['email', 'password'],
                description: 'User details to add',
                content: {
                'application/json': {
                    schema: addUserRequest,
                },
                },
            },
            responses: {
                200: {
                content: {
                    'application/json': {
                    schema: getAuthResponse,
                    },
                },
                },
                500: {
                content: {
                    'application/json': {
                    schema: getAuthResponse,
                    },
                },
                },
                400: {
                content: {
                    'application/json': {
                    schema: getAuthResponse,
                    },
                },
                },
            },
            },
        },
        '/login': {
            post: {
            tags: ['Auth'],
            summary: 'Login User api for login',
            description: 'This API allows a user to login.',
            operationId: 'loginUser',
            requestBody: {
                required: ['email', 'password'],
                description: 'login user',
                content: {
                'application/json': {
                    schema: userLogin,
                },
                },
            },
            responses: {
                200: {
                content: {
                    'application/json': {
                    schema: getAuthResponse,
                    },
                },
                },
                500: {
                content: {
                    'application/json': {
                    schema: getAuthResponse,
                    },
                },
                },
                400: {
                content: {
                    'application/json': {
                    schema: getAuthResponse,
                    },
                },
                },
            },
            },
        },
    }

export default auth;