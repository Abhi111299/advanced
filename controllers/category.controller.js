import { createCategory, findAllTheCategories, updateCategoryById, findOneCategory} from '../services/category.service.js';

export const category = async(req, res, next) => {
    try{
        const createCategoryData = await createCategory(req.body);
        res.status(201).json({ message: 'Category created successfully', createCategoryData });
    }catch(err){
        next(err);
    }
}

export const getAllCategory = async(req, res, next) => {
    try{
        const fetchCategories = await findAllTheCategories();
        res.status(201).json({ message: 'All categories fetched successfully', fetchCategories });
    }catch (err){
        next(err);
    }
}

export const getSingleCategory = async(req, res, next) => {
    try{
        const fetchCategories = await findOneCategory(req.params.id);
        res.status(201).json({ message: 'All categories fetched successfully', fetchCategories });
    }catch (err){
        next(err);
    }
}

export const updateCategory = async(req, res, next) => {
    try{
        const id = req.params.id;
        const data = req.body;
        const updateCategory = await updateCategoryById(id, data);
        res.status(200).json({message: 'Category updated successfully',data: updateCategory})
    }catch(err) {
        next(err);
    }
}