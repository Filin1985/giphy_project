import {createEvent, sample} from 'effector'
import {gifsModel} from '../../entities'

export const mount = createEvent()
export const unmount = createEvent()

sample({
  clock: mount,
  target: gifsModel.store.getRandomGifFx,
})

sample({
  clock: unmount,
  target: gifsModel.store.clear,
})
