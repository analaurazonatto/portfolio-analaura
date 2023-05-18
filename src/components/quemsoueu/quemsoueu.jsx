import './quemsoueu.css';
import '../../App.css';
import Tent from '../../assets/image/tent.png';


function QuemSouEu (){
    return (
        <div>
        <div id="QUEM"></div>
        <section class="about" id="about">
            <div class="max-width">
                <h2 class="title">QUEM SOU EU?</h2>
                <div class="about-content">
                    <div class="column left">
                <img src={Tent}alt=""></img>
                    </div>
                <div class="column right">
                    <div class="text">Olá! Sou Ana Laura, tenho 17 anos e estou no último ano do curso de <span>Desenvolvimento de Sistemas.</span></div>
                    <br></br>
                <p>Atualmente estudo na Etec Ermelinda Giannini Teixeira, em Santana de Parnaíba-SP.</p>
                <p>Este é o meu portfólio, cujo apresentarei minhas habilidades e conhecimentos aprendidos até então.</p>
                <br></br>
                <strong><p>Clique abaixo para visualizar minhas artes desenvolvidas no 1º ano de curso na plataforma GIMP.</p></strong>
                <br></br>
                <a href="https://sway.office.com/3L3xYTBZUeW8XJDE?ref=Link">Espero que goste :D</a><br></br>
                </div>
                    </div></div>

        </section>
        </div>
    );
}

export default QuemSouEu;