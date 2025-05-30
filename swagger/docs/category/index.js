import categoryComponent from "./component.js";
const {
    component: {
        schemas: {
            addCategoryRequest, getAuthResponse, getAllCategoryList, getCategoryInput, updateCategoryRequest
        },
    },
} = categoryComponent;

const admin = {
        '/admin/category': {
            post: {
            tags: ['Category'],
            summary: 'Category api to create a new category',
            description: 'This API allows add a new category.',
            operationId: 'addCategoryByAdmin',
            requestBody: {
                required: ['name'],
                description: 'Add category details',
                content: {
                'application/json': {
                    schema: addCategoryRequest,
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
        '/admin/get_all_categories': {
            get: {
            tags: ['Category'],
            summary: 'Category api to create a new category',
            description: 'This API allows add a new category.',
            operationId: 'getAllCategoriesByAdmin',
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
        '/get_category/{id}': {
            get: {
            tags: ['Category'],
            summary: 'Get Category details',
            description: 'Get Category details api',
            parameters: getCategoryInput,
            operationId: 'Category',
            responses: {
                200: {
                content: {
                    'application/json': {
                    schema: getCategoryInput,
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
            put: {
            tags: ['Category'],
            summary: 'Update Plan api to Update a Plan',
            description: 'This API allows to update a plan.',
            operationId: 'updatePlan',
            parameters: getCategoryInput,
            requestBody: {
                description: 'Plan details to update',
                content: {
                'application/json': {
                    schema: updateCategoryRequest,
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