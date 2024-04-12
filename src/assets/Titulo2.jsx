function Titulo2({nome , paragrafo, cor}){
    return(
        <div>
            <h1 style={{color:cor}}>Olá usamos props {nome ? nome : "ooooo"}</h1>
            {paragrafo ?
                <p>Podemos passar qualquer coisa.</p>
                : 
                <p>Não passamos nada.</p>       
                
            }
        </div>

    )
}

export default Titulo2