import { Text, Box, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, loading, error } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <Box>
      {loading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

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
