import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('postgres://pguser:password@localhost:5432/project-management')
