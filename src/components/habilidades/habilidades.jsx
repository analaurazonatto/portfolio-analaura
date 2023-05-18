import './habilidades.css';
import {BsBrush} from 'react-icons/bs';
import {FaHtml5, FaCss3, FaJava} from 'react-icons/fa';
import{SiCsharp, SiMysql,  SiJavascript} from 'react-icons/si';
function Habilidades (){
    return(

<div id="CONH">
        <section class="services" id="services">
            <div class="max-width">
                <h2 class="title">CONHECIMENTOS:<br></br></h2></div>
                <div class="serv-content">
                    <div class="card">
                        <div class="box">
                            <strong><div class="text"><br></br>Design Digital - Criação de Banners;</div></strong></div>
                           <BsBrush/>
                            <p></p>
                    </div>
                    </div>

                    <div class="card">
                        <div class="box">
                            <strong><div class="text">HTML - Criação de Sites;</div></strong>
                            <FaHtml5></FaHtml5>
                            <p></p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="box">
                            <strong><div class="text">CSS - Estilização de Sites;</div></strong>
                            <strong><FaCss3/> </strong>
                            <p></p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="box">
                            <strong><div class="text">CSHARP - Criação de Projetos;</div></strong>
                            <SiCsharp/>
                            <p></p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="box">
                            <strong><div class="text">Java & XML - Criação de Apps;</div></strong>
                            <FaJava/>
                            <p></p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="box">
                            <strong><div class="text">SQL - Criação e gerenciamento de Banco de Dados;</div></strong>
                            <SiMysql/>
                            <p></p>
                        </div>
                    </div>


                    <div class="card">
                        <div class="box">
                            <strong><div class="text">JavaScript - Criação de Sites com HTML e CSS;</div></strong>
                            <SiJavascript/>
                            <p></p>
                        </div>
                    </div>

        </section>
        </div>

    );

}
export default Habilidades;