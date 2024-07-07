import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'


interface Props{
    gameQuery: GameQuery
}

const GameHeadng = ({gameQuery}: Props) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  return (
    <Heading as='h1' marginY={8} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeadng