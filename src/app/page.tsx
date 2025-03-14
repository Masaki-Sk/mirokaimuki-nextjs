import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './globals.css';
import TopMenu from '@/components/TopMenu';
import MainPhoto from '@/components/MainPhoto';
import MiddlePhoto from '@/components/MiddlePhoto';
import MenuPhoto from '@/components/MenuPhoto';
import FooterMenu from '@/components/FooterMenu';

const Home = () => (
  <main>
    <Container fluid id="footer">
      <TopMenu />
      <MainPhoto />
      <MiddlePhoto />
      <MenuPhoto />
      <FooterMenu />
    </Container>
  </main>
);

export default Home;
