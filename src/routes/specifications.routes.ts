import { Router } from 'express';
import { CreateSpecificationService } from '../modules/cars/services/createSpecificationService';
import { specificationRepository } from '../modules/cars/repositories/specificationRepository';

const specificationRoutes = Router();
const createSpecificationRepository = new specificationRepository();

specificationRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(createSpecificationRepository);
  createSpecificationService.execute({ name, description });
  return response.status(201).send();
});

export { specificationRoutes };
