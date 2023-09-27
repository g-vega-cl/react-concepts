import classNames from "classnames";
import Link from "next/link";

export interface ITextLink {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export const TextLink = ({ href, children, className }: ITextLink) => {
    return (
        <Link
            className={classNames("text-pink-400 hover:underline italic", className)}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </Link>
    );

}