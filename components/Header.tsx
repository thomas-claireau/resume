import Image from 'next/image';

import Link from 'next/link';

import Button from './Button';

import { useAppContext } from '../AppContext';
import { useWindowSize } from '../hooks';

export default function Header() {
  const { i18n } = useAppContext();

  const { width } = useWindowSize();

  return (
    <header className="flex items-center justify-between pb-8 border-b border-gray-100">
      <div className="left flex items-center gap-3 sm:gap-6">
        <Button color="bg-[#c3ace9]" shadow="shadow-[0_2px_0_0_#a439ff]" href="mailto:pro.thomas.claireau@gmail.com" target="blank">
          {width >= 640 ? i18n?.contact : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )}

        </Button>
        <Link href="/blog">
          <a className="text-gray-300" target="blank">Blog</a>
        </Link>
      </div>
      <div className="flex items-center relative gap-4">
        <div className="flex flex-col items-end">
          <h2 className="font-medium">Thomas Claireau</h2>
          <h3 className="font-light text-sm sm:text-base">{i18n?.job}</h3>
        </div>

        <div className="hidden mini:block">
          <Image className="rounded-full" objectFit="cover" src="/img/me.jpg" layout="fixed" width={40} height={40} />
        </div>
      </div>
    </header>
  );
}
