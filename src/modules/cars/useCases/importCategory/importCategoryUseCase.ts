import fs from 'fs';
import { parse as csvParse } from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/iCategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    const stream = fs.createReadStream(file.path);
    const categories: IImportCategory[] = [];
    const parseFile = csvParse({
      delimiter: ',',
    });

    stream.pipe(parseFile);

    parseFile.on('data', async (line) => {
      const [name, description] = line;
      categories.push({ name, description });
    });

    await new Promise<void>((resolve, reject) => {
      parseFile.on('end', resolve);
      parseFile.on('error', reject);
      stream.on('error', reject);
    });

    await fs.promises.unlink(file.path).catch(() => {});

    return categories;
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    for (const category of categories) {
      const { name, description } = category;
      const existCategory = this.categoriesRepository.findByName(name);
      if (!existCategory) {
        this.categoriesRepository.create({ name, description });
      }
    }
  }
}

export { ImportCategoryUseCase };
