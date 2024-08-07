import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeadng from './components/GameHeadng';


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return < Grid templateAreas={
    {
      base: '"nav nav" "aside main"',
      lg: '"nav nav" "aside main"'
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}
  >
    <GridItem area='nav'><Navbar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/></GridItem>
    <Show above='lg'><GridItem area='aside' paddingX={7}>
      <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
    </GridItem> </Show>
    <GridItem area='main'>
      <GameHeadng gameQuery={gameQuery}/>
      <Box paddingLeft={2} >
      <Flex marginBottom={7}>
        <Box marginRight={8}>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
        </Box>        
        <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
      </Flex>
      </Box>
      <GameGrid gameQery={gameQuery} />
    </GridItem>
  </Grid>
}

export default App
