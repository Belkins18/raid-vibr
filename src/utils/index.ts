/* eslint-disable @typescript-eslint/no-explicit-any */
export * from './formatNumber'

export const timeout = (promise: Promise<any>, time: number) => {
  return Promise.race([promise, new Promise((_, rej) => setTimeout(rej, time))])
}

export const promiseFunction = async () => {
  await new Promise((res) => setTimeout(res, 10000))
  return 'promise'
}
