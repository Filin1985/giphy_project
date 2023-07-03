import {combine, createEffect, createStore, createEvent} from 'effector'
import {getTrendingGifs, getRandomGif, getSearchedGif} from '../../shared/api'

const $gifs = createStore([])
const $randomGif = createStore({})
const $searchedGifs = createStore([])
const $isGifsLoadingSuccess = createStore(false)
const $isRandomGifLoadingSuccess = createStore(false)
const $isSearchedGifLoadingSuccess = createStore(false)

const clear = createEvent()

export const getAllGifsFx = createEffect(async () => {
  const data = await getTrendingGifs()
  return data
})

export const getRandomGifFx = createEffect(async () => {
  const data = await getRandomGif()
  return data
})

export const getSearchedGifFx = createEffect(async (query: string) => {
  const data = await getSearchedGif(query)
  return data
})

$gifs.on(getAllGifsFx.doneData, (_, data) => data.data).reset(clear)
$isGifsLoadingSuccess.on(getAllGifsFx.doneData, () => true)

$randomGif.on(getRandomGifFx.doneData, (_, data) => data.data).reset(clear)
$isRandomGifLoadingSuccess.on(getRandomGifFx.doneData, () => true)

$searchedGifs.on(getSearchedGifFx.doneData, (_, data) => data.data).reset(clear)
$isSearchedGifLoadingSuccess.on(getSearchedGifFx.doneData, () => true)

const $gifsState = combine({
  data: $gifs,
  isLoadingSuccess: $isGifsLoadingSuccess,
})

const $randomGifState = combine({
  data: $randomGif,
  isLoadingSuccess: $isRandomGifLoadingSuccess,
})

const $searchedGifsState = combine({
  data: $searchedGifs,
  isLoadingSuccess: $isSearchedGifLoadingSuccess,
})

export const store = {
  $gifsState,
  $randomGifState,
  $searchedGifsState,
  $gifs,
  $randomGif,
  $searchedGifs,
  getAllGifsFx,
  getRandomGifFx,
  getSearchedGifFx,
  clear,
}
