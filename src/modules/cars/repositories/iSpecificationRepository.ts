import { Specification } from '../model/specification';

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}
export interface ISpecificationsRepository {
  findByName(name: string): Specification;
  create({ name, description }: ICreateSpecificationDTO): void;
}
