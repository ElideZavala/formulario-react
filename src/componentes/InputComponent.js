import {
  Label,
  GrupoInput,
  Input,
  IconoValidacion,
  LeyendaError,
} from "../elementos/Formularios";

import {
  faCircleCheck,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const InputComponent = ({
  tipo,
  label,
  placeholder,
  name,
  leyendaError,
  expresionRegular,
  estado,
  cambiarEstado,
}) => {
  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };

  const validacion = () => {
    if (expresionRegular) {
      // Comprobar un valor contra la forma. contra la expresion regular
      if (expresionRegular.test(estado.campo)) {
        // Si es correcto. cambiamos el estado de valido a true
        cambiarEstado({ ...estado, valido: "true" });
      } else {
        cambiarEstado({ ...estado, valido: "false" });
      }
    }
  };

  return (
    <div>
      <Label htmlFor={name} valido={estado.valido}>
        {label}
      </Label>
      <GrupoInput>
        <Input
          type={tipo}
          placeholder={placeholder}
          id={name}
          value={estado.campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
        />
        <IconoValidacion
          icon={estado.valido === "true" ? faCircleCheck : faTimesCircle}
          valido={estado.valido}
        />
      </GrupoInput>
      <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  );
};

export default InputComponent;
