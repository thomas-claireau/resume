import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';

import { useAppContext } from '../AppContext';
import Button from '../components/Button';

export default function Home() {
  const { i18n } = useAppContext();

  console.log(i18n);

  return (
    <Container className="py-4">
      <Header />

      <div className="flex gap-5 mt-8">
        <main className="w-full">
          <h1 className="text-2xl font-normal">{i18n?.h1}</h1>
          <p className="text-lg mt-4">{i18n?.description}</p>
          <div className="buttons mt-6 flex gap-2">
            <Button href="/portfolio" target="_blank" color="bg-[#88e7e2]" shadow="shadow-[0_2px_0_0_#5c9bfe]">{i18n?.buttons?.portfolio}</Button>
            <Button href="/blog" target="_blank" color="bg-[#ecbc87]" shadow="shadow-[0_2px_0_0_#df7700]">{i18n?.buttons?.blog}</Button>
            <Button href="/portfolio" target="_blank" color="bg-[#97e660]" shadow="shadow-[0_2px_0_0_#00ad4e]">{i18n?.buttons?.linktree}</Button>
          </div>
        </main>
        <aside className="w-full" />
      </div>

      {/* <Footer /> */}
    </Container>
  );
}
