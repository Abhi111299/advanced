import authComponent from "./component.js";
const {
    component: {
        schemas: {
            addUserRequest, getAuthResponse, userLogin, forgotPassword, verifyOtp, resetPassword
        },
    },
} = authComponent;

    const auth = {
        '/auth/register': {
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
        '/auth/login': {
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
        '/auth/forgot-password': {
            post: {
            tags: ['Auth'],
            summary: 'Forgot password',
            description: 'This API allows a user to forgot password recover.',
            operationId: 'forgotPassword',
            requestBody: {
                required: ['email'],
                description: 'forgot password by email',
                content: {
                'application/json': {
                    schema: forgotPassword,
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
        '/auth/verify-otp': {
            post: {
            tags: ['Auth'],
            summary: 'Forgot password',
            description: 'This API allows a user to forgot password recover.',
            operationId: 'verifyForgotPasswordOtp',
            requestBody: {
                required: ['email', 'otp'],
                description: 'forgot password otp verify',
                content: {
                'application/json': {
                    schema: verifyOtp,
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
        '/auth/reset-password': {
            post: {
            tags: ['Auth'],
            summary: 'Reset password',
            description: 'This API allows a user to Reset password.',
            operationId: 'resetForgotPassword',
            requestBody: {
                required: ['uuid', 'password', 'confirmPassword'],
                description: 'Reset password by UUID',
                content: {
                'application/json': {
                    schema: resetPassword,
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