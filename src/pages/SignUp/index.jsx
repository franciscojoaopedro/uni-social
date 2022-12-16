import styles from "./signUp.module.css"

const SignUp = () => {
    return (
        <div className={
            styles.SignUp
        }>
            <img src="../../../public/fundo@2x.svg" alt=""/>
            <div className={
                styles.container
            }>
               <div className={styles.content} >

               <div className={
                    styles.box
                }>
                    <div className={
                        styles.text
                    }>
                        <h2>Registar</h2>
                        <h4>Escresve-te para ficar a par das informações da unibelas</h4>
                    </div>


                    <div className={
                        styles.inputs
                    }>
                        <div className={
                            styles.inputsNames
                        }>
                            <div className={
                                styles.input
                            }>
                                <input name="name" placeholder="Primeiro nome" required
                                    type={"text"}/>
                            </div>
                            <div className={
                                styles.input
                            }>
                                <input name="ultimoNome" placeholder="Ultimo nome" required
                                    type={"text"}/>
                            </div>
                        </div>

                        <div className={
                            styles.outroInputs
                        }>
                            <div className={
                                styles.input
                            }>
                                <input name="Processo" placeholder="Nº Processo"
                                    type={"number"}
                                    required/>
                            </div>

                            <div className={
                                styles.input
                            }>
                                <input name="Email" placeholder="Email"
                                    type={"email"}/>
                            </div>

                            <div className={
                                styles.input
                            }>
                                <input name="Password" placeholder="Password"
                                    type={"password"}
                                    required/>
                            </div>

                            <div className={
                                styles.btn
                            }>
                                <button className={
                                    styles.btnRegistrar
                                }>Registar</button>
                            </div>
                        </div>

                    </div>

                        <div className={
                            styles.dicas
                        }>
                            <h3>Já tens uma  conta?</h3>
                            <a href="#">Clique agora</a>

                      ~
                      
                        </div>
                </div>

               </div>
            </div>












        </div>
    )
}

export default SignUp
