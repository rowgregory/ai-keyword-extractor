import { Container, Box } from '@chakra-ui/react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import TextInput from './components/TextInput.jsx';
import KeywordsModal from './components/KeywordsModal.jsx';

const App = () => {
  return (
    <Box
      bg='blue.600'
      color='white'
      height='100vh'
      paddingTop={130}
      className='App'
    >
      <Container maxW='3xl' centerContent>
        <Header />
        <TextInput />
        <Footer />
      </Container>
      <KeywordsModal />
    </Box>
  );
};

export default App;
