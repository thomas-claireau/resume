import Link from 'next/link';

type Props = {
  children: JSX.Element | string;
  color: string;
	shadow: string;
	href?: string;
	target?: string;
}

export default function Button({
  children, color, shadow, href = null, target = '',
}: Props) {
  const classes = `font-bold ${color} py-3 px-4 rounded-xl ${shadow} print:shadow-none print:bg-[#fff] print:py-0 print:px-0`;

  return href ? (
    <Link href={href}>
      <a className={classes} target={target}>{children}</a>
    </Link>
  ) : (
    <button className={classes}>
      {children}
    </button>
  );
}
