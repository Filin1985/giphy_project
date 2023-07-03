import {createEvent, sample} from 'effector'
import {gifsModel} from '../../entities'

export const mount = createEvent<string>()
export const unmount = createEvent()

sample({
  clock: mount,
  target: gifsModel.store.getSearchedGifFx,
})

sample({
  clock: unmount,
  target: gifsModel.store.clear,
})
