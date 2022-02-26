import { Button, SimpleGrid, Switch, useColorMode, Text } from '@chakra-ui/react';
import { ref, set, increment as rtdbIncrement } from 'firebase/database';
import { useDatabase, useDatabaseObjectData } from 'reactfire';
import { answers } from '../config/constants';

export const AdminPanel: React.FC = () => {
  const dbRef = useDatabase();

  const gameRef = ref(dbRef, '/');
  const { status, data } = useDatabaseObjectData<Record<string, number>>(gameRef);

  const { colorMode, toggleColorMode } = useColorMode();

  const increment = (amountToIncrement: number, index) => {
    return set(ref(dbRef, `/${index}`), rtdbIncrement(amountToIncrement));
  };
  return (
    <SimpleGrid flex="col" column={2} padding={10} spacing={3}>
      <Switch onChange={toggleColorMode} color="green" />
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          set(gameRef, {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0,
            12: 0,
            13: 0,
            14: 0,
            15: 0,
          });
        }}
      >
        Reset
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 1);
        }}
      >
        <Text noOfLines={2}>{answers[1].text}</Text>
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 2);
        }}
      >
        <Text noOfLines={2}>{answers[2].text}</Text>
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 3);
        }}
      >
        <Text noOfLines={2}>{answers[3].text}</Text>
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 4);
        }}
      >
        <Text noOfLines={2}>{answers[4].text}</Text>
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 5);
        }}
      >
        <Text noOfLines={2}>{answers[5].text}</Text>
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 6);
        }}
      >
        {' '}
        <Text noOfLines={2}>{answers[6].text}</Text>
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 7);
        }}
      >
        <Text noOfLines={2}>{answers[7].text}</Text>
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 8);
        }}
      >
        <Text noOfLines={2}>{answers[8].text}</Text>
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 9);
        }}
      >
        <Text noOfLines={2}>{answers[9].text}</Text>
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 10);
        }}
      >
        <Text noOfLines={2}>{answers[10].text}</Text>
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 11);
        }}
      >
        <Text noOfLines={2}>{answers[11].text}</Text>
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 12);
        }}
      >
        <Text noOfLines={2}>{answers[12].text}</Text>
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 13);
        }}
      >
        <Text noOfLines={2}>{answers[13].text}</Text>
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 14);
        }}
      >
        <Text noOfLines={2}>{answers[14].text}</Text>
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 15);
        }}
      >
        <Text noOfLines={2}>{answers[15].text}</Text>
      </Button>
    </SimpleGrid>
  );
};
