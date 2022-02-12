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
      <Center zIndex={'10'} paddingTop="70px">
        <Text fontSize="4vw" fontFamily={'zcool'}>
          美貌与智慧
        </Text>
        <Text fontSize="4vw" fontFamily={'zcool'} color="#FF69B4">
          你会怎样选?
        </Text>
      </Center>
      <SimpleGrid zIndex={'10'} columns={2} spacingY={8} spacingX={10}>
        {Object.keys(data).map((d) =>
          d !== 'NO_ID_FIELD' ? <GridBox key={d} answers={answers} data={data} d={d} /> : null
        )}
      </SimpleGrid>
      <LoveBackground></LoveBackground>
    </Container>
  ) : (
    <Text>Loading</Text>
  );
};
