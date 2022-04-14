type Props = {
  children: JSX.Element | JSX.Element[];
	className: string;
}

export default function Container({ children, className }: Props) {
  return (
    <div className={`${className} max-w-5xl mx-auto px-4`}>
      {children}
    </div>
  );
}
