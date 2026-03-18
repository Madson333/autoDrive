import { CategoriesRepository } from '../../repositories/implemetations/categoriesRepository';
import { ImportCateogoryController } from './importCategoryController';
import { ImportCategoryUseCase } from './importCategoryUseCase';

export default (): ImportCateogoryController => {
  const importCategoryRepository = new CategoriesRepository();
  const importCategoryUseCase = new ImportCategoryUseCase(importCategoryRepository);
  const importCategoryContoller = new ImportCateogoryController(importCategoryUseCase);
  return importCategoryContoller;
};
