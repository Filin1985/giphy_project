export const API_URL: string = `https://api.giphy.com/v1/gifs/`

const VITE_KEY = import.meta.env.VITE_GIPHY_KEY

export const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then(() => Promise.reject(res.status))
}

export const apiRequest = <T>(
  url: string,
  options: RequestInit
): Promise<T> => {
  return fetch(url, options).then((res) => checkResponse<T>(res))
}

export const getTrendingGifs = () => {
  return apiRequest<any>(`${API_URL}trending?api_key=${VITE_KEY}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charger=utf-8',
    },
  })
}

export const getRandomGif = () => {
  return apiRequest<any>(`${API_URL}random?api_key=${VITE_KEY}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charger=utf-8',
    },
  })
}

export const getSearchedGif = (query: string) => {
  return apiRequest<any>(`${API_URL}search?q=${query}&api_key=${VITE_KEY}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charger=utf-8',
    },
  })
}
