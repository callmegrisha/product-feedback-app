import { Flex } from '@chakra-ui/react';

import { Section } from './components/Section';
import { Sidebar } from './components/Sidebar';
import { Info } from './components/Info/Info';
import { TagsList } from './components/TagsList/TagsList';
import { SuggestionsList } from './features/suggestions/components/SuggestionsList';
import { Roadmap } from './components/Roadmap';
import { Controls } from './components/Сontrols';

import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/700.css';
import '@fontsource/jost/800.css';

function App() {
  return (
    <>
      <Info display={['flex', 'flex', 'none', 'none']} />
      <Controls display={['flex', 'flex', 'none', 'none']} />
      <Section p={['32px 0', '32px 0', '94px 0 129px', '94px 0 129px']}>
        <Sidebar>
          <Info />
          <TagsList />
          <Roadmap />
        </Sidebar>
        <Flex direction='column' gap='24px'>
          <Controls display={['none', 'none', 'flex', 'flex']} />
          <SuggestionsList />
        </Flex>
      </Section>
    </>
  );
}

export default App;
