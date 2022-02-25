import { Button, SimpleGrid, Switch, useColorMode } from '@chakra-ui/react';
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
    <SimpleGrid column={2} padding={10} spacing={3}>
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
        {answers[1].text}
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 2);
        }}
      >
        {answers[2].text}
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 3);
        }}
      >
        {answers[3].text}
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 4);
        }}
      >
        {answers[4].text}
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 5);
        }}
      >
        {answers[5].text}
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 6);
        }}
      >
        {answers[6].text}
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 7);
        }}
      >
        {answers[7].text}
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 8);
        }}
      >
        {answers[8].text}
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 9);
        }}
      >
        {answers[9].text}
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          increment(1, 10);
        }}
      >
        {answers[10].text}
      </Button>
    </SimpleGrid>
  );
};
