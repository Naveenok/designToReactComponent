import "./App.css";
import {
  Container,
  Image,
  Layout,
  Heading,
  Summary,
  BottomInformation,
  TopLayout,
  Label,
  AvartarAndText,
  AvatarImg,
  Info,
  Author,
} from "./styles";

function App() {
  return (
    <Container>
      <Image src="https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXN8ZW58MHx8MHx8&w=1000&q=80" />
      <Layout>
        <TopLayout>
          <Heading>converting design to UI</Heading>
          <Summary>
            Copyright ownership gives the owner the exclusive right to use the
            work, with some exceptions. When a person creates an original work,
            fixed in a tangible medium, he or she automatically owns copyright
            to the work.
          </Summary>
        </TopLayout>
        <BottomInformation>
          <Label>Tutorial</Label>
          <AvartarAndText>
            <AvatarImg src="https://st2.depositphotos.com/1011434/7519/i/950/depositphotos_75196567-stock-photo-handsome-man-smiling.jpg" />
            <Info>
              <Author>Author</Author>
              <div>jan 10th, 2022</div>
            </Info>
          </AvartarAndText>
        </BottomInformation>
      </Layout>
    </Container>
  );
}

export default App;
