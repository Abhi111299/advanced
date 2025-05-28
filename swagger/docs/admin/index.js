import adminComponent from "./component.js";
const {
    component: {
        schemas: {
            addUserRequest, getAuthResponse
        },
    },
} = adminComponent;

const admin = {
        '/admin/register': {
            post: {
            tags: ['Admin'],
            summary: 'Register User api to create a new user',
            description: 'This API allows add a new user.',
            operationId: 'addUserByAdmin',
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
    }


export default admin;