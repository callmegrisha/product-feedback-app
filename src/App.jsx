import { Box } from '@chakra-ui/react';
import { Section } from './components/Section';
import { Sidebar } from './components/Sidebar';
import { Info } from './UI/Info/Info';
import { BaseTag } from './UI/BaseTag';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/700.css';
import '@fontsource/jost/800.css';
import { TagsList } from './components/TagsList/TagsList';

function App() {
  return (
    <>
      <Section>
        <Sidebar>
          <Info />
          <TagsList />
        </Sidebar>
        <Box>Hello content</Box>
      </Section>
    </>
  );
}

export default App;
