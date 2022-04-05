import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Languages from '../components/Languages';

import { useAppContext } from '../AppContext';
import Button from '../components/Button';
import Box from '../components/Box';

export default function Home() {
  const { i18n } = useAppContext();

  return (
    <Container className="py-4">
      <Header />

      <div className="flex gap-5 mt-8">
        <main className="w-full min-w-[65%]">
          <h1 className="text-2xl font-normal">{i18n?.h1}</h1>
          <p className="text-lg mt-4">{i18n?.description}</p>
          <div className="buttons mt-6 flex gap-2">
            <Button href="/portfolio" target="_blank" color="bg-[#88e7e2]" shadow="shadow-[0_2px_0_0_#5c9bfe]">{i18n?.buttons?.portfolio}</Button>
            <Button href="/blog" target="_blank" color="bg-[#ecbc87]" shadow="shadow-[0_2px_0_0_#df7700]">{i18n?.buttons?.blog}</Button>
            <Button href="/portfolio" target="_blank" color="bg-[#97e660]" shadow="shadow-[0_2px_0_0_#00ad4e]">{i18n?.buttons?.linktree}</Button>
          </div>

          <Box data={i18n?.projects} />
          <Box data={i18n?.formation} />
        </main>
        <aside className="w-full">
          <Box data={i18n?.skills} ul />
          <Box data={i18n?.tools} ul />
          <Box data={i18n?.interests} ul />

          <Languages />
        </aside>
      </div>

      <Footer />
    </Container>
  );
}
