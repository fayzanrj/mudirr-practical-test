import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

// Props
interface ProjectTextInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
}

const ProjectTextInput = ({
  name,
  value,
  onChange,
  placeholder,
  error,
  minLength,
  maxLength,
  required,
}: ProjectTextInputProps) => (
  <FormControl mb={4} isInvalid={!!error}>
    <FormLabel fontSize="0.85rem">
      {placeholder}{" "}
      <span style={{ fontSize: "0.7rem" }}>
        ({value.length}/{maxLength})
      </span>
    </FormLabel>
    <Input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      fontSize="0.85rem"
      focusBorderColor="#5876b7"
      minLength={minLength}
      maxLength={maxLength}
      required={required}
    />
    <FormErrorMessage>{error}</FormErrorMessage>
  </FormControl>
);

export default ProjectTextInput;
