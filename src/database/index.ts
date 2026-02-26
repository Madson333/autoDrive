import { DataSource } from 'typeorm';
import { Category } from '../modules/cars/entities/category';
import { Specification } from '../modules/cars/entities/specification';

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  entities: [Category, Specification],
  migrations: ['src/database/migrations/*.ts'],
});

export default dataSource;
