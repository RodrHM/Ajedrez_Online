import 'dotenv'

import { Sequelize } from 'sequelize';
import ServerModel from './models/Server';
import env from './env';

const DB_URL = env.DB_URL

const sequelize = new Sequelize(DB_URL, {
        logging:false,
        native:false,
});

const modelDefiners = [ServerModel];
modelDefiners.forEach(model => model(sequelize))

export const models = sequelize.models
export const conn = sequelize