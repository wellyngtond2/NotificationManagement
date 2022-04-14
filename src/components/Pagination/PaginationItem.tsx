import { Button } from "@chakra-ui/button";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}
export default function PaginationItem({ isCurrent = false, number }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: "pink.500",
          cursor: "default",
        }}
      >
        {number}
      </Button>
    )
  }
  return (
    <Button size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
    >
      {number}
    </Button>
  )


}