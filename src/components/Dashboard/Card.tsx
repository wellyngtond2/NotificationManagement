import { BoxProps } from "@chakra-ui/core";
import { Box, Text } from "@chakra-ui/react";

interface CardProps extends BoxProps {
  title: string,
  value: number,
  valueColor?: string,
}

export default function Card({ title, value, valueColor }: CardProps) {  
  return (
    <Box
      _hover={
        {
          backgroundColor: "gray.700",
          transition: "all .4s ease-in-out",
        }
      }
      p="8"
      bg="gray.800"
      borderRadius={8}
    >
      <Text fontSize="lg" mb="4">{title}</Text>
      <Text fontSize="xxx-large" mb="4" align="center" color={valueColor} >{value}</Text>
    </Box>
  );
}