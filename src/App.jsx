import Titulo from "./assets/Titulo"
import Titulo2 from "./assets/Titulo2"
import Titulo3 from "./assets/Titulo3"

function App() {
  return (
    <div>
      <Titulo/>
      <Titulo2 nome="Amanda" paragrafo={false} cor="red"/>
      <Titulo2 paragrafo={true}/>
      <Titulo2 nome="Fulano" cor="blue"/>
      <Titulo3 cor="green"/>
      
    </div>
  )
}

export default App