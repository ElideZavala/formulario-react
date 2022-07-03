import { useState } from "react";

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
  // faCircleXmark,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import Input from "./componentes/InputComponent";

function App() {
  const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [password2, cambiarPassword2] = useState({ campo: "", valido: null });
  const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
  const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });
  // const [terminos, cambiarTerminos] = useState(false)

  const expresiones = {
    // usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    usuario: /^[a-z0-9_-]{4,16}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const validarPassword2 = () => {
    if (password.campo.length > 0) {
      if (password.campo !== password2.campo) {
        // cambiarPassword2((prevState) => {
        //   return { ...prevState, valido: "false" };
        // });
        cambiarPassword2({ ...password2, valido: "false" });
      } else {
        // cambiarPassword2((prevState) => {
        //   return { ...prevState, valido: "true" };
        // });
        cambiarPassword2({ ...password2, valido: "true" });
      }
    }
  };

  return (
    <main>
      <Formulario action="">
        <Input
          estado={usuario}
          cambiarEstado={cambiarUsuario}
          tipo="text"
          label="Usuario"
          placeholder="Ingresa tu Usuario"
          name="usuario"
          leyendaError="El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros letras y guion bajo"
          expresionRegular={expresiones.usuario}
        />

        <Input
          estado={nombre}
          cambiarEstado={cambiarNombre}
          tipo="text"
          label="Nombre"
          placeholder="Elide Zavala"
          name="usuario"
          leyendaError="El nombre solo puede contener letras y espacios."
          expresionRegular={expresiones.nombre}
        />

        <Input
          estado={password}
          cambiarEstado={cambiarPassword}
          tipo="password"
          label="Contraseña"
          name="password1"
          leyendaError="La contraseña tiene que ser de 4 a 12 digitos"
          expresionRegular={expresiones.password}
        />

        <Input
          estado={password2}
          cambiarEstado={cambiarPassword2}
          tipo="password"
          label="Repetir Contraseña"
          name="password2"
          leyendaError="Ambas contraseñas deben ser iguales"
          // Le podemos pasar una funcion que quremos que ejecute cuando haya un cambio en el input
          funcion={validarPassword2}
        />

        <Input
          estado={correo}
          cambiarEstado={cambiarCorreo}
          tipo="email"
          label="Correo Electrónico"
          placeholder="zavalavinagreelide@gmail.com"
          name="correo"
          leyendaError="El correo solo puede contener Letras, nuemeros, puntos y guiones"
          expresionRegular={expresiones.correo}
        />

        <Input
          estado={telefono}
          cambiarEstado={cambiarTelefono}
          tipo="text"
          label="Teléfono"
          placeholder="9999999999"
          name="telefono"
          leyendaError="El telefono solo  puede contener numeros y el maximo es de 14 digitos"
          expresionRegular={expresiones.telefono}
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
