import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './importCategoryUseCase';

class ImportCateogoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    await this.importCategoryUseCase.execute(file);

    return response.send();
  }
}

export { ImportCateogoryController };
