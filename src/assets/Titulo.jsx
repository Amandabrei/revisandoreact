function Titulo(){

    let nome = "Amanda aprendendo";
    const soma = 10 + 10;
    const urlImg = "https://img.freepik.com/fotos-gratis/menina-livro-leitura-e-bebendo_23-2148104244.jpg?w=740&t=st=1712854210~exp=1712854810~hmac=7b07edfbdae72e95e723bfa780a528cded3cb9127ccc3eff830ba1465953e637";

    return (
        <div>
            <h1> React {nome} {soma}</h1>
            <img width={250} src={urlImg} />
            <p>
                - primeiro veja se tem instalado na máquina digite no cmd: node -v 
                - se não tiver já até o site baixe a última versão e instale 
                - para saber a versão instalada e se deu certo digite novamente no cmd: node -v 
                - para ver os pacote digite no cmd: npm -v 
                - dai vá até o C da máquina e crie uma pasta chamada React, copie o caminho e cole ele no cmd 
                - limpe digitando: cls 
                - entre no site vitejs.dev, em Getting Started, no final do site mostra como criar o projeto, npm create vite@latest my-vue-app -- --template vue. 
                - no cmd dentro da pasta que criamos cole o comando e altere com o nome do projeto: npm create vite@latest projeto1 -- --template react 
                - após criado entre dentro dele digitando: cd projeto1 
                - abra no VSC digitando code . aperte enter 
                - pronto, já está aberto o projeto no VSC. 
                - abra o terminal apertando no VSC CTRL aspas simples, daí pode fechar a tela cmd do windows. 
                - no terminal do VSC digite: npm install irá instalar todas as dependências para rodar o React. 
                - depois para rodar na porta localhost digite: npm run dev 
                - no link mostrado segure o CTRL e clica para abrir o projeto inicial 
                - pronto a instalaçao
                
                O que é jsx: é mistura JS com HTML.
                Props são atributos/propriedades que podemos dar aos componentes, veja o código Titulo2 e compare no App
                Estado são as memórias que armazemam os valores, veja código Titulo3
            </p>
        </div>
      
    )
         
}

export default Titulo