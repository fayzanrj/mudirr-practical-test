import DAYS_IN_MONTH from "@/constants/DaysInMonth";
import { Flex, FormControl, FormErrorMessage, FormLabel, Select } from "@chakra-ui/react";

// Props
interface NextMilestoneDateSelectProps {
  month: string;
  date: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  variant?: "NEXT_STEP" | "NEW";
  error?: string;
}

const NextMilestoneDateSelect = ({
  month,
  date,
  onChange,
  variant = "NEW",
  error,
}: NextMilestoneDateSelectProps) => (
  <FormControl mb={4} isInvalid={!!error}>
    <FormLabel fontSize="0.85rem">
      {variant === "NEW" ? "First Milestone Date" : "Next Milestone Date"}
    </FormLabel>
    <Flex gap={4}>
      <Select
        name="month"
        placeholder="Select month"
        value={month}
        onChange={onChange}
        fontSize="0.85rem"
        focusBorderColor="#5876b7"
        required
      >
        {Object.keys(DAYS_IN_MONTH).map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </Select>

      <Select
        name="date"
        placeholder="Select day"
        value={date}
        onChange={onChange}
        disabled={!month}
        fontSize="0.85rem"
        focusBorderColor="#5876b7"
        required
      >
        {month &&
          // @ts-expect-error WILL FIX LATER
          Array.from({ length: DAYS_IN_MONTH[month] }, (_, i) => i + 1).map(
            (day) => (
              <option key={day} value={day}>
                {day}
              </option>
            )
          )}
      </Select>
    </Flex>
    <FormErrorMessage>{error}</FormErrorMessage>
  </FormControl>
);

export default NextMilestoneDateSelect;
