import 'whatwg-fetch'

console.log(fetch)

let _fetch = (load) => {
  console.log(load.address)
  return fetch(load.address).then(response => response.text())
  .then(_ => "console.log('umwat')")
}

export { _fetch as fetch }
