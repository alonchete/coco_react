
import logo from './assets/drink.svg';
import barra from './img/barra.jpg';
import './css/main.css';
function App() {
  return (

  <>
    <header class="nav">

    <div class="nav__container">
    <h1 class="nav__logo">
        <img src={logo}/>

    </h1>

    <label for="menu" class="nav__label">

        <img src="assets/menu.svg" alt="nav__img"/>

    </label>

    <input type="checkbox" id="menu" class="nav__input"/>
    
    <div class="nav__menu">
        <a href="#" class="nav__item">Home</a>
        <a href="#" class="nav__item">Categorías</a>
        <a href="#" class="nav__item">Algo</a>
        <a href="#" class="nav__item">contacto</a>
    </div>

</div>
</header>

<div class="cabecera">
<img src={barra}/>
<div class="COCOKTAIL">COCOKTAIL.</div>
</div>

<div class="categorias">

<div class="card">

    <div class="card-bg">

        <img src="img/img16.jpg" alt="..."/>

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

        <img src="img/img16.jpg" alt="..."/>

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

        <img src="img/img16.jpg" alt="..."/>

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


    </>
    
  ) 


  
  
 
}

export default App;
