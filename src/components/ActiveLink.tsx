import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children?: React.ReactElement;
  shouldMatchExactHref?: boolean;

}

export default function ActiveLink({ children, shouldMatchExactHref = false, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isAtive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isAtive = true;
  }

  if (!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))) {
    isAtive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isAtive ? "pink.400" : "gray.50",
      })}
    </Link>
  )

}