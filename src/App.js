import Title from 'components/title/Title'
import Button from 'components/button/Button'

function App() {
  return (
    <>
      <Title>
        Esto es un Title
      </Title>
      <Title secondary >
        Title secondary
      </Title>
      <Button>
        Boton primario
      </Button>
      <Button secondary >
        Boton secundario
      </Button>
    </>
  );
}

export default App;
