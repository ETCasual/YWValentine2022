import { FirebaseProps } from '../config/firebaseProps';
import { GameScreen } from '../routes/gamescreen';

const Index: React.FC = () => {
  return (
    <FirebaseProps>
      <GameScreen />
    </FirebaseProps>
  );
};

export default Index;
