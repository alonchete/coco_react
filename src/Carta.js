
import coctel1 from './img/img16.jpg';

function carta(){
    return(

<div class="categorias">

<div class="card">

    <div class="card-bg">

        <img src={coctel1} alt="..."/>

    </div>

    <div class="card-context">

        <div class="dark-bg"></div>

        <h2>Categoria1</h2>

        <p>
            Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Sapiente tenetur dicta cupiditate.
        </p>

        <button>Ver más</button>

    </div>

</div>
<div class="card">

    <div class="card-bg">

    <img src={coctel1} alt="..."/>

    </div>

    <div class="card-context">

        <div class="dark-bg"></div>

        <h2>Categoria2</h2>

        <p>
            Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Sapiente tenetur dicta cupiditate.
        </p>

        <button>Ver más</button>

    </div>
    
</div>
<div class="card">

    <div class="card-bg">

    <img src={coctel1} alt="..."/>

    </div>

    <div class="card-context">

        <div class="dark-bg"></div>

        <h2>Categoria3</h2>

        <p>Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Sapiente tenetur dicta cupiditate.
        </p>

        <button>Ver más</button>

    </div>
    
</div>
</div>



    )
}

export default carta;