## ToDo
- ~~Konami code~~
- Home
    - ~~Ref e inView per ogni box~~
    - ~~Frecce non del carousel~~
    - Pallini avanzamento carousel
    - Titolo Interessi?
    - onClick freccia in basso
    - PieceOfCode console.log(festività)
    - Account Mastodon.social
- i18n
- Pagina dei lavori
- Privacy policy?
- Secret page
- ~~Comprimere immagini~~
- 404 page
- Spostare citazioni?
- Citazioni mobile

## Idee
- Video background in home
``` jsx
import Video from './images/video.mp4';

<video autoPlay playsInline loop muted className='bg-video' src={Video} />
```
```css
.bg-video {
    object-fit: cover;
    width: 101vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
}
```