import './navbar.css';
import '../../App.css';
import Logo from '../../assets/image/logo.png';

function NavBar (){
return(
<div> 
<div class="navbar">
        <div class="max-width">
            <img src={Logo} alt=""></img>
            <ul class="menu">
                <li><a href="#">INÍCIO</a></li>
                <li><a href="#QUEM">QUEM SOU EU?</a></li>
                <li><a href="#CONH">CONHECIMENTOS</a></li>
                <li><a href="#teams">PRINCIPAIS PROJETOS</a></li>
                <li><a href="#CONT">CONTATO</a></li>
            </ul>
        </div>
    </div> 
    </div>
    );
    }

    export default NavBar;