const categoryComponent = {
    component: {
        schemas: {
            addCategoryRequest: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        example: 'Hair',
                        require: true,
                        description: 'enter category name',
                    },
                },
            },
            getAllCategoryList: {
                type: 'object',
            },
            getCategoryInput:[
                {
                in: 'path',
                name: 'id',
                required: true,
                description: 'Enter category id',
                },
            ],
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
            updatePlanRequest: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                require: true,
                description: 'enter Plan Name',
            }
        },
      },
        },
    },
};

export default categoryComponent;
