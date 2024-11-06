import { request } from '../Base/HTTP';

export async function getHgWeather() {
  return await request('api/getHgWeather');
}