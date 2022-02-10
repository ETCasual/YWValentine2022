import { Button, SimpleGrid, Switch, useColorMode } from '@chakra-ui/react';
import { ref, set } from 'firebase/database';
import { useDatabase, useDatabaseObjectData } from 'reactfire';
import { answers } from '../config/constants';

export const AdminPanel: React.FC = () => {
  const dbRef = useDatabase();

  const gameRef = ref(dbRef, '/');
  const { status, data } = useDatabaseObjectData<Record<string, boolean>>(gameRef);

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <SimpleGrid column={2} padding={10} spacing={3}>
      <Switch onChange={toggleColorMode} color="green" />
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          set(gameRef, {
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false,
            7: false,
            8: false,
          });
        }}
      >
        Reset
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          set(gameRef, {
            ...data,
            1: true,
          });
        }}
      >
        {answers[1]}
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          set(gameRef, {
            ...data,
            2: true,
          });
        }}
      >
        {answers[2]}
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          set(gameRef, {
            ...data,
            3: true,
          });
        }}
      >
        {answers[3]}
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          set(gameRef, {
            ...data,
            4: true,
          });
        }}
      >
        {answers[4]}
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          set(gameRef, {
            ...data,
            5: true,
          });
        }}
      >
        {answers[5]}
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          set(gameRef, {
            ...data,
            6: true,
          });
        }}
      >
        {answers[6]}
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          set(gameRef, {
            ...data,
            7: true,
          });
        }}
      >
        {answers[7]}
      </Button>
      <Button
        fontSize="xl"
        width={'100%'}
        onClick={() => {
          set(gameRef, {
            ...data,
            8: true,
          });
        }}
      >
        {answers[8]}
      </Button>
    </SimpleGrid>
  );
};
