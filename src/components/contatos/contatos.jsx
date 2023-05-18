import './contatos.css'

function Contatos (){
    return(
        <div>
<div id="CONT"></div>
    <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">CONTATO:</h2>
            <div class="contact-content">
                <div class="column left">
                    <ion-icon name="call-outline"></ion-icon>
                    <strong><div class="text">Telefone:</div></strong>
                    <strong><p>+55 11 940028933</p></strong>
                    <br></br>
                </div>
                <div class="row">
                    <div class="info">
                        <ion-icon name="mail-outline"></ion-icon>
                        <strong><div class="head">E-mail:</div></strong>
                        <strong><div class="sub-title">analauramzs123@gmail.com</div></strong>
                        <br></br>
                    </div>
                </div>
                <div class="icons">
                    <div class="row">
                        <div class="info">
                            <ion-icon name="logo-instagram"></ion-icon>
                            <strong><div class="head">Instagram:</div></strong>
                            <strong><div class="sub-title">@laurazonatto</div></strong>
                            <br></br>
                        </div>
                    </div>
                    <div class="row">
                        <div class="info">
                            <ion-icon name="logo-linkedin"></ion-icon>
                          <strong><div class="head">LinkedIn:</div></strong>
                            <strong><div class="sub-title">Ana Laura Zonatto</div></strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>



    );
}

export default Contatos;