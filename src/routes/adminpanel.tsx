import { Button } from '@chakra-ui/react';
import { ref, set } from 'firebase/database';
import { useDatabase } from 'reactfire';

export const AdminPanel: React.FC = () => {
  const dbRef = useDatabase();

  const gameRef = ref(dbRef, '/');
  return (
    <Button
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
  );
};
