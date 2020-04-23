import '../src/css/style.scss'
import img from '../src/assets/bg.jpg'

const textComponent = () => {
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = `Olá Mundo!`
    elemH1.classList.add( 'title' )
    return elemH1
}

const imgComponent = () => {
    const elemImg = new Image( 300, 180 )
    elemImg.src = img
    return elemImg
}

document.body.appendChild( textComponent() )
// document.body.appendChild( textComponent() )
document.body.appendChild( imgComponent() )