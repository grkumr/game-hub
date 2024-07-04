import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
    <GridItem area='nav'><Navbar /></GridItem>
    <Show above='lg'><GridItem area='aside' paddingX={7}>
      <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
    </GridItem> </Show>
    <GridItem area='main'>
      <HStack spacing={10} paddingLeft={2} marginBottom={7}>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
        <SortSelector />
      </HStack>
      <GameGrid gameQery={gameQuery} />
    </GridItem>
  </Grid>
}

export default App
