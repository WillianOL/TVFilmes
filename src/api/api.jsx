import { AUTHORIZATION } from './authorization';
const API_URL = 'https://api.themoviedb.org/3/';

export function GET_POPULARES(plataforma) {
  return {
    url: `${API_URL}${plataforma}/popular?language=pt-BR&page=1`,
    options: {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: AUTHORIZATION,
      },
    },
  };
}

export function GET_TRENDING(intervalo) {
  return {
    url: `${API_URL}/trending/all/${intervalo}?language=pt-BR&page=1`,
    options: {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: AUTHORIZATION,
      },
    },
  };
}

export function GET_ATORES_POPULARES() {
  return {
    url: `${API_URL}/person/popular?language=pt-BR&page=1`,
    options: {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: AUTHORIZATION,
      },
    },
  };
}

export function GET_GENERO() {
  return {
    url: `${API_URL}/genre/movie/list?language=pt-BR`,
    options: {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: AUTHORIZATION,
      },
    },
  };
}

export function GET_RESULTADO_PESQUISA(valor) {
  return {
    url: `${API_URL}search/multi?query=${valor}&include_adult=false&language=en-US&page=1`,
    options: {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: AUTHORIZATION,
      },
    },
  };
}

// 