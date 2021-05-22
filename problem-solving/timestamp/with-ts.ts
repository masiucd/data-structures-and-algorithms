const timeStamp = 5000

const withPrefix = (time: number) => {
  return time < 10 ? `0${time}` : `${time}`
}

const makeTime = (timeStamp: number) => {
  const hh = ~~(timeStamp / 3600)
  const mm = ~~((timeStamp % 3600) / 60)
  const ss = ~~(timeStamp % 60)

  return `${withPrefix(hh)}:${withPrefix(mm)}:${withPrefix(ss)}`
}
