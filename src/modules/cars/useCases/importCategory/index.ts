import { CategoriesRepository } from '../../repositories/implemetations/categoriesRepository';
import { ImportCateogoryController } from './importCategoryController';
import { ImportCategoryUseCase } from './importCategoryUseCase';

const importCategoryRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(importCategoryRepository);
const importCategoryContoller = new ImportCateogoryController(importCategoryUseCase);

export { importCategoryContoller };
