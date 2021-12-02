import { ReactElement, cloneElement } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export const ActiveLink = ({
	children,
	activeClassName,
	...props
}: IActiveLinkProps) => {
	const { asPath } = useRouter();

	const className = asPath === props.href ? activeClassName : ""
	// -------------------------------------------------
	// Render
	// -------------------------------------------------
	return (
		<Link {...props}>
			{cloneElement(children, {
				className,
			})}
		</Link>
	);
};
