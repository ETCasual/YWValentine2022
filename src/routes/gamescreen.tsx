import { ref } from 'firebase/database';
import { useDatabase, useDatabaseObjectData } from 'reactfire';
import { Container } from '../components/Container';
import { answers } from '../config/constants';

import { SimpleGrid, Text, Center } from '@chakra-ui/react';

import { GridBox } from '../components/GridBox';
import { LoveBackground } from '../components/LoveBackground';

export const GameScreen = () => {
  const dbRef = useDatabase();

  const gameRef = ref(dbRef, '/');
  const { status, data } = useDatabaseObjectData<Record<string, boolean>>(gameRef);

  return status === 'success' ? (
    <Container height="100vh" overflow="hidden">
      <Center zIndex={'10'}>
        <Text fontSize="6vw" fontFamily={'zcool'}>
          美貌与智慧
        </Text>
        <Text fontSize="6vw" fontFamily={'zcool'} color="#FF69B4">
          你会怎样选?
        </Text>
      </Center>
      <SimpleGrid zIndex={'10'} columns={2} spacing={10}>
        {Object.keys(data).map((d) =>
          d !== 'NO_ID_FIELD' ? <GridBox answers={answers} data={data} d={d} /> : null
        )}
      </SimpleGrid>
      <LoveBackground></LoveBackground>
    </Container>
  ) : (
    <Text>Loading</Text>
  );
};
