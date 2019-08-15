export const createIframe = (src) => {
    var i = document.createElement('iframe')
    i.style.display = 'none'
    i.onload = () => { i.parentNode.removeChild(i) }
    i.src = src
    document.body.appendChild(i)
}