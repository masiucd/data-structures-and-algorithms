;(() => {
  function stack() {
    const storage = []
    const push = item => {
      storage.push(item)
    }
    const pop = () => {
      storage.pop()
    }
    const isEmpty = () => {
      return storage.length === 0
    }
    const peek = () => {
      return storage.length > 0 ? storage[storage.length - 1] : storage
    }
    return {
      push,
      pop,
      peek,
      isEmpty,
      storage,
    }
  }

  const getElement = selector => document.querySelector(selector)
  const stackEl = getElement(".stack")
  const pushBtn = getElement("#push")
  const popBtn = getElement("#pop")
  const peekBtn = getElement("#peek")

  const s = stack()

  s.push(1)
  s.push(2)
  s.push(3)
  s.push(34)

  const randomNum = (n = 100) => Math.floor(Math.random() * n)

  const renderItems = (xs = s.storage) => {
    for (const item of xs) {
      stackEl.innerHTML += `<div class="item">${item}</div>`
    }
  }

  pushBtn.addEventListener("click", () => {
    s.push(randomNum())
    stackEl.innerHTML += `<div class="item">${s.peek()}</div>`
  })

  popBtn.addEventListener("click", () => {
    s.pop()
    const lastChild = stackEl.lastChild
    stackEl.removeChild(lastChild)
  })

  peekBtn.addEventListener("click", () => {
    console.log("foo")
    const peekItem = s.peek()
    getElement("#peek-display").innerHTML = `<span>peek element is: ${peekItem}</span>`
    setTimeout(() => {
      getElement("#peek-display").innerHTML = ``
    }, 5000)
  })

  renderItems()
})()
