import "./App.css";
import { Container, Image, Layout, Heading, Summary } from "./styles";

function App() {
  return (
    <Container>
      <Image src="https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXN8ZW58MHx8MHx8&w=1000&q=80" />
      <Layout>
        <Heading>converting design to UI</Heading>
        <Summary>
          Copyright ownership gives the owner the exclusive right to use the
          work, with some exceptions. When a person creates an original work,
          fixed in a tangible medium, he or she automatically owns copyright to
          the work.
        </Summary>
      </Layout>
    </Container>
  );
}

export default App;
