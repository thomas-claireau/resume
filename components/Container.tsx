import { forwardRef } from 'react';

type Props = {
  children: JSX.Element | JSX.Element[];
	className: string;
}

function Container({ children, className }: Props, ref) {
  return (
    <div className={`min-h-screen ${className} max-w-5xl mx-auto px-4 flex flex-col justify-between print:block`} ref={ref}>
      {children}
    </div>
  );
}

export default forwardRef(Container);
