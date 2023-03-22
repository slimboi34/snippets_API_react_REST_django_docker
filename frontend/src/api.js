import axios from 'axios';
import { Link } from "react-router-dom";
const API_BASE_URL = 'http://localhost:8132/api/';

export const getSnippets = async () => {
const response = await axios.get(`${API_BASE_URL}snippets/`);
return response.data;
};

export const createSnippet = async (snippetData) => {
const response = await axios.post(`${API_BASE_URL}snippets/`, snippetData);
return response.data;
};

export const getSnippet = async (id) => {
const response = await axios.get(`${API_BASE_URL}snippets/${id}/`);
return response.data;
};

export const updateSnippet = async (id, snippetData) => {
const response = await axios.put(`${API_BASE_URL}snippets/${id}/`, snippetData);
return response.data;
};

export const deleteSnippet = async (id) => {
    console.log("delete",id)
const response = await axios.delete(`${API_BASE_URL}snippets/${id}/`);
return response.data;
};
