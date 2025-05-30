import prisma from '../config/prisma.js';
import { category } from '../controllers/category.controller.js';
import ApiError from '../utils/apiError.js';
import { validateCategorySchema } from '../validations/category.validation.js';

export const createCategory = async({ name }) => {
    await validateCategorySchema({name});

    const saveCategory = await prisma.category.create({ data : {name}});
    return saveCategory;
}

export const findAllTheCategories = async() => {
    const allCategoryList = await prisma.category.findMany();
    return allCategoryList;
}

export const updateCategoryById = async(categoryId, updateData) =>{
    const updateCategory = await prisma.category.update({
        where: {
            id: categoryId,
        },
        data: updateData
    })
    return updateCategory;
}

export const findOneCategory = async(categoryId) => {
    const categoryData = await prisma.category.findUnique({
        where: {
            id: categoryId,
        }
    });
    return categoryData;
}