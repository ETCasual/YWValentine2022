import { ref } from 'firebase/database';
import { useDatabase, useDatabaseObjectData } from 'reactfire';
import { Container } from '../components/Container';
import { motion } from 'framer-motion';
import { answers } from '../config/constants';

import { SimpleGrid, Text, Center, CenterProps, keyframes, Flex } from '@chakra-ui/react';

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
      <Flex>
        <Text fontSize="6vw" fontFamily={'zcool'}>
          美貌与智慧
        </Text>
        <Text fontSize="6vw" fontFamily={'zcool'} color="#FF69B4">
          你会怎样选?
        </Text>
      </Flex>
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
