import React from 'react'
import 'styles/pages/aboutus.scss';

const AboutUs = () => {
    return ( 
        <div className="container-fluid text-center container-about-us">
        <div className="container-filter">
            <img src="https://drive.google.com/uc?export=view&id=1DD0bAjAJ7d41nouZDJebLSqigKN1YMgE" className="img2" alt="CD" />
        </div>
        <h2 id="title-about-us">HISTORIA</h2>
        
        <div className='info-about' stlye="text-align:left">
            <p>
            Por poco más de 20 años, este valioso y jugoso rincón ha sido testigo del auge, grácil caída y el
            resurgimiento en tiempos millennials del acetato. Este pequeño local del Centro Histórico es considerado
            el templo de la tradición de viniles especializados en el género dance y sobre todo el hi energy.
            Fue uno de los epicentros donde se gestó el inconfundible sonido Polymarch, ¡cien por ciento capitalino!

            En sus largos anaqueles encontrarás tesoros que podrían sacarte de pobre en ebay o Mercado Libre,
            como viejas ediciones de Madonna o los Talking Heads, hasta impresiones japonesas de cumbia underground. 
            Ten paciencia con la soberbia del dueño, suele tener un carácter espinoso, pero sus títulos a la venta lo valen.
            </p>
        </div>
        <img id="img-discoschowell"src="https://onthegrid.city/imager/s3_amazonaws_com/onthegrid.city/assets/grid/mexico-city/centro-historico/chowell-discos/DSCF6509-1_299006722e285f47655d17d1c9136337.jpg" className="img2" alt="CD" />
        <div className='info-about' stlye="text-align:left">
            <p>
            Ubicado en la calle de Mesones, num.12, entre Bolivar y Aldaco, 
            se encuentra un pequeño local llamado Discos Chowell. Se estableció y
             si bien parece un espacio bastante reducido para almacenar muchos de estos discos, te darás cuenta que contiene
              una gran variedad de música. Pop, rock, punk, disco, artistas que creíste olvidados, sin duda un santuario de los amantes 
              de los acetatos y la música en general. También podrás encontrar algunas torna mesas para que tengas todo el kit completo.
            </p>
        </div>
    </div>
     );
}
 
export default AboutUs;