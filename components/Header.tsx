import { useRouter } from 'next/router';
import Image from 'next/image';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';

import Button from './Button';

import en from '../locales/en';
import fr from '../locales/fr';

export default function Header() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;

  const { theme } = resolveConfig(tailwindConfig);

  return (
    <header className="flex items-center justify-between">
      <div className="left">
        <Button color="bg-[#c3ace9]" shadow="shadow-[0_2px_0_0_#a439ff]">{t.contact}</Button>
      </div>
      <div className="flex items-center relative gap-4">
        <div className="flex flex-col items-end">
          <h2 className="font-medium">Thomas Claireau</h2>
          <h3 className="font-light">{t.job}</h3>
        </div>

        <Image className="rounded-full" objectFit="cover" src="/img/me.jpg" layout="fixed" width={40} height={40} />
      </div>
    </header>
  );
}
