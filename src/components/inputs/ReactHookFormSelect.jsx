import { 
  FormControl,
  Select,
} from "@mui/material"
import { Controller, useFormContext } from "react-hook-form";

const ReactHookFormSelect = ({
  name,
  label,
  defaultValue,
  children,
  ...props
}) => {

  const { control } = useFormContext();

  return (
    <FormControl {...props}>
      <Controller
          render={({ field }) => (
            <Select {...field}>
              {children}
            </Select>
          )}
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};
export default ReactHookFormSelect;