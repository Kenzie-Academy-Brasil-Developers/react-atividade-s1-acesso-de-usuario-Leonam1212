
import "./style.css"
const RestrictedPage = ({isLoggedIn, user, Login, Logout}) => {

    return (
        <>
            { 
       
        isLoggedIn ? 

            <section>
                <p>Bem vindo, {user}</p>
                <button onClick = {Logout}>Sair</button> 
            </section> 
            
            :

            <section>
                <p> Voce não possui o acesso </p>
                <button onClick = {Login}>Fazer login</button> 
            </section> 
            }
       
        </>
    )





}


export default RestrictedPage






