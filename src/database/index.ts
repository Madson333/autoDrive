import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
});

dataSource.initialize();
