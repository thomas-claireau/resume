import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';

import { useAppContext } from '../AppContext';

export default function Home() {
  const { i18n } = useAppContext();

  console.log(i18n);

  return (
    <Container className="py-4">
      <Header />

      <div className="flex gap-5">
        <main className="w-full">
          <h1>{i18n?.h1}</h1>
        </main>
        <aside className="w-full" />
      </div>

      {/* <Footer /> */}
    </Container>
  );
}
