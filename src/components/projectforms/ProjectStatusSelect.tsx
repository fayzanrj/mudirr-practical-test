import { FormControl, FormLabel, Select } from "@chakra-ui/react";

// Props
interface ProjectStatusSelectProps {
  status: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ProjectStatusSelect = ({
  status,
  onChange,
}: ProjectStatusSelectProps) => (
  <FormControl mb={4}>
    <FormLabel fontSize="0.85rem">Current Status</FormLabel>
    <Select
      name="status"
      placeholder="Select status"
      value={status}
      onChange={onChange}
      fontSize="0.85rem"
      focusBorderColor="#5876b7"
      required
    >
      <option value="Ongoing">Ongoing</option>
      <option value="Draft">Drafts</option>
      <option value="Cancelled">Cancelled</option>
      <option value="Completed">Completed</option>
    </Select>
  </FormControl>
);

export default ProjectStatusSelect;
