import { Repository } from 'typeorm';
import dataSource from '../../../../database';
import { Category } from '../../entities/category';
import { ICategoriesRepository, ICreateCategoryDTO } from '../iCategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  private static INTANCE: CategoriesRepository;

  private constructor() {
    this.repository = dataSource.getRepository(Category);
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INTANCE) {
      CategoriesRepository.INTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INTANCE;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    return this.repository.find();
  }

  async findByName(name: string): Promise<Category | null> {
    const category = await this.repository.findOneBy({ name });
    return category;
  }
}

export { CategoriesRepository };
