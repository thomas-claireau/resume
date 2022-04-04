type Props = {
  children: JSX.Element | string;
  color: string;
	shadow: string;
}

export default function Button({ children, color, shadow }: Props) {
  return (
    <button className={`font-bold ${color} py-3 px-4 rounded-xl ${shadow}`}>
      {children}
    </button>
  );
}
