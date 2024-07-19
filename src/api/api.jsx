const API_URL = 'https://api.themoviedb.org/3/';
const AUTHORIZATION = import.meta.env.VITE_REACT_API_AUTHORIZATION

export function GET_POPULARES(plataforma) {
  return {
    url: `${API_URL}/trending/${plataforma}/day?language=pt-BR`,
    options: {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AUTHORIZATION}`,
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
        Authorization: `Bearer ${AUTHORIZATION}`,
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
        Authorization: `Bearer ${AUTHORIZATION}`,
      },
    },
  };
}

export function GET_GENERO(type) {
  return {
    url: `${API_URL}/genre/${type}/list?language=pt-BR`,
    options: {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AUTHORIZATION}`,
      },
    },
  };
}

export function GET_RESULTADO_PESQUISA(valor) {
  return {
    url: `${API_URL}search/multi?query=${valor}&include_adult=false&language=pt-BR&page=1`,
    options: {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AUTHORIZATION}`,
      },
    },
  };
}

export function GET_DETALHES_FILME(id) {
  return {
    url: `${API_URL}/movie/${id}?append_to_response=credits,recommendations&language=pt-BR`,
    options: {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AUTHORIZATION}`,
      },
    },
  };
}

export function GET_DETALHES_SERIE(id) {
  return {
    url: `${API_URL}/tv/${id}?append_to_response=credits,recommendations&language=pt-BR`,
    options: {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AUTHORIZATION}`,
      },
    },
  };
}

export function GET_DETALHES_ATOR(id) {
  return {
    url: `${API_URL}person/${id}?append_to_response=combined_credits&language=pt-BR`,
    options: {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AUTHORIZATION}`,
      },
    },
  };
}

export function GET_KEYWORD(query) {
  return {
    url: `${API_URL}search/keyword?query=${query}&page=1`,
    options: {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AUTHORIZATION}`,
      },
    },
  };
}

export function GET_POR_FILTRO({
  type,
  generos = '',
  palavras = '',
  ano = '',
}) {
  return {
    url: `${API_URL}discover/${type}?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc${
      generos && `&with_genres=${generos.join('%2C%20')}`
    }${palavras && `&with_keywords=${palavras}`}${ano && `&year=${ano}`}`,
    options: {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AUTHORIZATION}`,
      },
    },
  };
}
// https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&without_genres=a%C3%A7%C3%A3o&without_keywords=escapar&year=2000
