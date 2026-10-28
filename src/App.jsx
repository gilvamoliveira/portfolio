import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Stack from './components/Stack.jsx';
import Process from './components/Process.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useLocale } from './i18n/LocaleContext.jsx';

export default function App() {
  const { t } = useLocale();

  return (
    <>
      <a className="skip-link" href="#conteudo">
        {t.a11y.skip}
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Projects />
        <Stack />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
