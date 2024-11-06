import { HttpMethod } from '../Constants/HttpMethod';
import { request } from '../Base/HTTP';
import { generateSearchURL } from '../Util/ServiceUtil';

export async function createBook(data) {
  return await request('/api/book', data, HttpMethod.POST);
}

export async function updateBook(data) {
  return await request('/api/book/' + data?.id, data, HttpMethod.PUT);
}

export async function deleteBook(id) {
  return await request('/api/book/' + id, {}, HttpMethod.DELETE);
}

export async function getAllBooks(data = {}) {
  const urlParams = generateSearchURL(data)
  return await request('/api/books?' + urlParams);
}

export async function getBook(data = {}) {
  const urlParams = generateSearchURL(data)
  return await request('/api/book/' + data?.id + '?' + urlParams);
}