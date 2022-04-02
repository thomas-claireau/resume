type Props = {
  children: JSX.Element | JSX.Element[];
}

export default function Container({ children }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {children}
    </div>
  );
}
