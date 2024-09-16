import { useToast } from "@chakra-ui/react";

const handleApiError = (error: unknown, toast: ReturnType<typeof useToast>) => {
  if (error instanceof Error) {
    toast({
      description: error.message,
      status: "error",
      duration: 5000,
      colorScheme:"#5876b7",
      containerStyle:{backgroundColor : "#5876b7", borderRadius : "6px", fontSize : "0.8rem"},
      position : "top-right"
    });
  } else {
    toast({
      description: "An unknown error occurred",
      status: "error",
      duration: 5000,
      colorScheme:"#5876b7",
      containerStyle:{backgroundColor : "#5876b7", borderRadius : "6px", fontSize : "0.8rem"},
      position : "top-right"
    });
  }
};

export default handleApiError;
