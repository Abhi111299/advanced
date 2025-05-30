import prisma from '../config/prisma.js'
import ApiError from '../utils/apiError.js'


export const validateCategorySchema = async ({ name }) => {
  const exists = await prisma.category.findUnique({ where: { name } });
  if (exists) {
    throw new ApiError(422, 'Category already exists');
  }
};