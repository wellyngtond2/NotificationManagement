import { As, Icon, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { RiDashboardLine } from "react-icons/ri";
import ActiveLink from "../ActiveLink";

interface NavLinkProps {
  href: string;
  text: string;
  icon: As;

}

export default function NavegationLink({ href, text, icon, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <Link display="flex" textAlign="center" {...rest}>
        <Icon as={icon} fontSize="20"></Icon>
        <Text ml="4" fontWeight="medium">{text}</Text>
      </Link>
    </ActiveLink>
  );
}