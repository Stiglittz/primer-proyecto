import Hello from 'components/hello/Hello'
import Button from 'components/button/Button'

function App() {
  return (
    <>
      <Hello text="Hola prop" />
      <Hello text="Hola prop2" />
      <Button>
        Click aqui
      </Button>
      <Button>
        Cancelar
      </Button>
    </>
  );
}

export default App;
