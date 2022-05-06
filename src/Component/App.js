import { Carta } from './Carta';
import { CartaB1 } from './CartaB1';

import '../Style/App.css';

function App(props) {
  const list = props.list
  return (
    <div>
        <Carta/>
        {list.map((cartas)=> <CartaB1 name={cartas.name} time={cartas.time} img={cartas.img} last={cartas.last} back={cartas.back} />)}
    </div>
  );
}

export default App;
