import './meusprojetos.css';
import Word from '../../assets/image/word.png';
import Lokar from '../../assets/image/locadoraimg.png';
import Laviana from '../../assets/image/appjoia.jpg';
import Veggies from '../../assets/image/vegg.png';
import DoceLar from '../../assets/image/imob.png';

function MeusProjetos(){
    return(
        <div>
        <section class="teams" id="teams">
            <div class="max-width">
                <h2 class="title">PRINCIPAIS PROJETOS:</h2>
                <div class="carousel">
                <div class="card">
                    <div class="box">
                        <br></br><img className='img_projetos' src={Word} alt=""></img>
                        <br></br>
                        <div class="text">WORLD SKY - Site de Agência de Viagens</div>
                        <p><a href="https://youtu.be/6O8M668-GeI">Projeto Completo</a><br></br></p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <br></br><img className='img_projetos' src={Lokar}alt=""></img>
                        <br></br>
                        <div class="text">LOKAR - Aplicação em C# de uma Locadora de Veículos</div>
                        <p><a href="https://www.linkedin.com/posts/ana-laura-zonatto-095202258_ds-sql-programacao-ugcPost-7008034996007415808-LWbK?utm_source=share&utm_medium=member_desktop">Projeto Completo</a><br></br></p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <br></br><img className='img_projetos'src={Laviana}alt=""></img>
                        <br></br>
                        <div class="text">LAVIANA - APP Joalheria</div>
                        <strong><p>Desenvolvido no ECLIPSE</p></strong>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <br></br><img className='img_projetos'src={Veggies} alt=""></img>
                        <br></br>
                        <div class="text">VEGGIES BURGUER - APP Lanchonete Vegana</div>
                        <strong><p>Desenvolvido no ECLIPSE</p></strong>                    
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <br></br><img className='img_projetos'src={DoceLar} alt=""></img>
                        <br></br>
                        <div class="text">DOCE LAR - APP Imobiliária</div>
                        <strong><p>Desenvolvido no ECLIPSE</p></strong>                   
                    </div>
                    </div>
                </div>
                </div>
        </section>

        
        </div>
    );
}

export default MeusProjetos;