// @flow
import dotenv from 'dotenv';

dotenv.config();

// Database Settings
export const jwtSecret = process.env.SECRET || 'awesome_secret';
export const DATABASE_NAME = process.env.DATABASE_NAME || 'stories';
export const TEST_DATABASE_NAME = process.env.TEST_DATABASE_NAME || 'stories';
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME || 'stories';
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'stories';

export const port = process.env.PORT || 4000;
