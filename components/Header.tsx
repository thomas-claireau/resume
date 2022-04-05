import Image from 'next/image';

import Link from 'next/link';

import Button from './Button';

import { useAppContext } from '../AppContext';

export default function Header() {
  const { i18n } = useAppContext();

  return (
    <header className="flex items-center justify-between pb-8 border-b border-gray-100">
      <div className="left flex items-center gap-6">
        <Button color="bg-[#c3ace9]" shadow="shadow-[0_2px_0_0_#a439ff]" href="mailto:pro.thomas.claireau@gmail.com" target="blank">{i18n?.contact}</Button>
        <Link href="/blog">
          <a className="text-gray-300" target="blank">Blog</a>
        </Link>
      </div>
      <div className="flex items-center relative gap-4">
        <div className="flex flex-col items-end">
          <h2 className="font-medium">Thomas Claireau</h2>
          <h3 className="font-light">{i18n?.job}</h3>
        </div>

        <Image className="rounded-full" objectFit="cover" src="/img/me.jpg" layout="fixed" width={40} height={40} />
      </div>
    </header>
  );
}
