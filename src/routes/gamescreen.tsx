import { ref } from 'firebase/database';
import { useDatabase, useDatabaseObjectData } from 'reactfire';
import { Container } from '../components/Container';
import { motion } from 'framer-motion';
import { answers } from '../config/constants';

import { SimpleGrid, Text, Center, CenterProps, keyframes } from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/react';

import { GridBox } from '../components/GridBox';

const flip = keyframes`
from {transform: rotateX(0deg);}
to {transform: rotateX(180deg)}
`;

export const GameScreen = () => {
  const dbRef = useDatabase();

  const gameRef = ref(dbRef, '/');
  const { status, data } = useDatabaseObjectData<Record<string, boolean>>(gameRef);

  return status === 'success' ? (
    <Container height="100vh">
      <Text fontSize="6vw" fontFamily={'zcool'}>
        择偶条件
      </Text>
      <SimpleGrid columns={2} spacing={10}>
        {Object.keys(data).map((d) =>
          d !== 'NO_ID_FIELD' ? <GridBox answers={answers} data={data} d={d} /> : null
        )}
      </SimpleGrid>
    </Container>
  ) : (
    <Text>Loading</Text>
  );
};
