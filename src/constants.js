//File Name: constants.js
//Path: src/
//Description: This file contains all the constants.
import Config from 'Config';
export const prefix = '';
export const mountNode = 'GignApp';
export const assetsPrefix = Config.assetsPrefix;
export const host = Config.host;
export const apiUrl = Config.apiUrl;
export const formTypes = {
	urlencoded: 'application/x-www-form-urlencoded',
	json: 'application/json'
}