import { useToast } from "@chakra-ui/react";

const handleApiSuccess = (
  message: string,
  toast: ReturnType<typeof useToast>
) => {
  toast({
    description: message,
    status: "success",
    duration: 5000,
    colorScheme:"#5876b7",
    containerStyle:{backgroundColor : "#5876b7", borderRadius : "6px", fontSize : "0.8rem"},
    position : "top-right"
  });
};

export default handleApiSuccess;
