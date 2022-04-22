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

      <div className="flex flex-col gap-0 mt-8 md:flex-row md:gap-5">
        <main className="w-full min-w-[65%]">
          <div>
            <h1 className="text-2xl font-normal">
              {i18n?.h1}
            </h1>
            <Languages className="flex md:hidden" />
          </div>
          <p className="text-lg mt-4">{i18n?.description}</p>
          <div className="buttons mt-6 flex flex-wrap gap-2">
            <Button href="#" color="bg-[#88e7e2]" shadow="shadow-[0_2px_0_0_#5c9bfe]">{i18n?.buttons?.portfolio}</Button>
            <Button href="https://www.linkedin.com/in/thomas-claireau/recent-activity/shares/" target="_blank" color="bg-[#ecbc87]" shadow="shadow-[0_2px_0_0_#df7700]">{i18n?.buttons?.blog}</Button>
          </div>

          <Box data={i18n?.projects} />
          <Box data={i18n?.formation} />
        </main>
        <aside className="w-full">
          <Box data={i18n?.skills} ul />
          <Box data={i18n?.tools} ul />
          <Box data={i18n?.interests} ul />

          <Languages className="hidden md:flex" />
        </aside>
      </div>

      <Footer />
    </Container>
  );
}
