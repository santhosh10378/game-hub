import { Spinner, Text, Box, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, loading, error } = useGames();

  return (
    <Box>
      {loading && <Spinner />}
      {error && <Text color="red.500">{error}</Text>}
      <SimpleGrid
        spacing={10}
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        padding="10px"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameGrid;
