import {
  Formulario,
  Label,
  GrupoInput,
  Input,
  IconoValidacion,
  LeyendaError,
  Boton,
  ContenerBotonCentradao,
  ContenedorTerminos,
  MensajeExito,
  MensajeError,
} from "./elementos/Formularios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleCheck,
  faCircleXmark,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <main>
      <Formulario action="">
        <div>
          <Label htmlFor="nombre">Usuario</Label>
          <GrupoInput>
            <Input type="text" placeholder="usuario" id="nombre" />
            <IconoValidacion icon={faCircleCheck} />
          </GrupoInput>
          <LeyendaError>
            Hoy es un excelente dia para dar gracias..
          </LeyendaError>
        </div>
        <ContenedorTerminos>
          <Label>
            <input type="checkbox" name="terminos" id="terminos" />
            Acepto los terminos y condiciones
          </Label>
        </ContenedorTerminos>
        <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b>Error:</b> Por favor rellena el formulario correctamente.
          </p>
        </MensajeError>
        <ContenerBotonCentradao>
          <Boton type="submit">Enviar</Boton>
          <MensajeExito>Formulario enviado exitosamente!</MensajeExito>
        </ContenerBotonCentradao>
      </Formulario>
    </main>
  );
}

export default App;
