import './signUp.css';
import { Header } from '../../components/Header';
const SignUp = () => {
    return (
        <main className="singup">
            <Header />
            <section className="s-singup">
                <div className="content">
                    <div className="s-image">
                        <img src="../../../public/fundo@2x.svg" alt="" />
                    </div>

                    <form className="form-registrar">
                        <div className="input-nomes">
                            <div className="inputs">
                                <input
                                    type="text"
                                    placeholder="Primeiro nome"
                                />
                            </div>

                            <div className="inputs">
                                <input type="text" placeholder="Ultimo nome" />
                            </div>
                        </div>

                        <div className="input-email-processo-password">
                            <div className="inputs">
                                <input
                                    type="number"
                                    placeholder="Nº Processo"
                                />
                            </div>
                            <div className="inputs">
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="inputs">
                                <input type="password" placeholder="Password" />
                            </div>
                        </div>
                        <div className="btns">
                            <button className="btn-registrar">Registrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default SignUp;
