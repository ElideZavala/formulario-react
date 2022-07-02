import {
  Formulario,
  Label,
  Boton,
  ContenerBotonCentradao,
  ContenedorTerminos,
  MensajeExito,
  MensajeError,
} from "./elementos/Formularios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleXmark,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import Input from "./componentes/InputComponent";

function App() {
  return (
    <main>
      <Formulario action="">
        <Input
          tipo="text"
          label="Usuario"
          placeholder="Ingresa tu Usuario"
          name="usuario"
          leyendaError="El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros letras y guion bajo"
          expresionRegular=""
        />

        <Input
          tipo="password"
          label="Password"
          placeholder="Ingresa tu Password"
          name="password"
          leyendaError="dasdas"
          expresionRegular="dasdasdas"
        />

        <ContenedorTerminos>
          <Label>
            <input type="checkbox" name="terminos" id="terminos" />
            Acepto los terminos y condiciones
          </Label>
        </ContenedorTerminos>
        {false && (
          <MensajeError>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error:</b> Por favor rellena el formulario correctamente.
            </p>
          </MensajeError>
        )}
        <ContenerBotonCentradao>
          <Boton type="submit">Enviar</Boton>
          <MensajeExito>Formulario enviado exitosamente!</MensajeExito>
        </ContenerBotonCentradao>
      </Formulario>
    </main>
  );
}

export default App;
