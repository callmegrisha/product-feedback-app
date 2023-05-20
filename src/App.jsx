import { Box, Flex } from '@chakra-ui/react';

import { Section } from './components/Section';
import { Sidebar } from './components/Sidebar';
import { Info } from './components/Info/Info';
import { TagsList } from './components/TagsList/TagsList';
import { SuggestionsList } from './features/suggestions/components/SuggestionsList';
import { Roadmap } from './components/Roadmap';

import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/700.css';
import '@fontsource/jost/800.css';
import { Controls } from './components/Сontrols';

function App() {
  return (
    <>
      <Section>
        <Sidebar>
          <Info />
          <TagsList />
          <Roadmap />
        </Sidebar>
        <Flex direction='column' gap='24px'>
          <Controls />
          <SuggestionsList />
        </Flex>
      </Section>
    </>
  );
}

export default App;
