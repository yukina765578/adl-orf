"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const handler = async (event) => {
    const { path, httpMethod, body } = event;
    const notionApiUrl = `https://api.notion.com/v1${path.replace('/api/notion', '')}`;
    const headers = {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
    };
    try {
        const response = await (0, node_fetch_1.default)(notionApiUrl, {
            method: httpMethod,
            headers,
            body: httpMethod === 'POST' && body ? body.toString() : undefined,
        });
        const data = await response.json();
        return {
            statusCode: response.status,
            body: JSON.stringify(data),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
exports.handler = handler;
