import { Spinner, Text, Box, List, ListItem } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, loading, error } = useGames();

  return (
    <Box>
      {loading && <Spinner />}
      {error && <Text color="red.500">{error}</Text>}
      <List spacing={3}>
        {games.map((game) => (
          <ListItem key={game.id}>{game.name}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GameGrid;
