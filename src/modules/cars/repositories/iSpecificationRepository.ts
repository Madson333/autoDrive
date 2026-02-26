import { Specification } from '../entities/specification';

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}
export interface ISpecificationsRepository {
  findByName(name: string): Promise<Specification | null>;
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
}
