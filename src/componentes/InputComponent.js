import {
  Label,
  GrupoInput,
  Input,
  IconoValidacion,
  LeyendaError,
} from "../elementos/Formularios";

import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const InputComponent = ({
  tipo,
  label,
  placeholder,
  name,
  leyendaError,
  expresionRegular,
}) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <GrupoInput>
        <Input type={tipo} placeholder={placeholder} id={name} />
        <IconoValidacion icon={faCircleCheck} />
      </GrupoInput>
      <LeyendaError>{leyendaError}</LeyendaError>
    </div>
  );
};

export default InputComponent;
