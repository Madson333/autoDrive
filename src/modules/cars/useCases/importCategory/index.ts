import { ImportCateogoryController } from './importCategoryController';
import { ImportCategoryUseCase } from './importCategoryUseCase';

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryContoller = new ImportCateogoryController(importCategoryUseCase);

export { importCategoryContoller };
