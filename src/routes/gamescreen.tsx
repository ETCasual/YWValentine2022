import { ref } from 'firebase/database';
import { useDatabase, useDatabaseObjectData } from 'reactfire';
import { Container } from '../components/Container';
import { answers } from '../config/constants';

import { SimpleGrid, Text, Center } from '@chakra-ui/react';

import { GridBox } from '../components/GridBox';

export const GameScreen = () => {
  const dbRef = useDatabase();

  const gameRef = ref(dbRef, '/');
  const { status, data } = useDatabaseObjectData<Record<string, boolean>>(gameRef);

  return status === 'success' ? (
    <Container
      height="100vh"
      overflowY="scroll"
      overflowX="hidden"
      bg="black"
      paddingY="70px"
      paddingX="35px"
    >
      <SimpleGrid zIndex={'10'} columns={4} spacingY={8} spacingX={10}>
        {Object.keys(data).map((d) =>
          d !== 'NO_ID_FIELD' ? <GridBox key={d} answers={answers} data={data} d={d} /> : null
        )}
      </SimpleGrid>
    </Container>
  ) : (
    <Text>Loading</Text>
  );
};
