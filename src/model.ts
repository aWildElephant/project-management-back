import { DataTypes, Sequelize } from 'sequelize'

export const sequelize = new Sequelize('postgres://pguser:password@localhost:5432/project-management')

export const Task = sequelize.define("task", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    }
}, {
    createdAt: "creationTimestamp",
    updatedAt: "modificationTimestamp",
    underscored: true
})
