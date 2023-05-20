import { Box } from '@chakra-ui/react';
import { Section } from './components/Section';
import { Sidebar } from './components/Sidebar';
import { Info } from './components/Info/Info';
import { TagsList } from './components/TagsList/TagsList';
import { Roadmap } from './components/Roadmap';

import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/700.css';
import '@fontsource/jost/800.css';
import { SuggestionsList } from './components/SuggestionsList/SuggestionsList';

function App() {
  return (
    <>
      <Section>
        <Sidebar>
          <Info />
          <TagsList />
          <Roadmap />
        </Sidebar>
        <Box>
          <SuggestionsList />
        </Box>
      </Section>
    </>
  );
}

export default App;
