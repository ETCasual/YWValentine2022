import { FirebaseProps } from '../../config/firebaseProps';
import { AdminPanel } from '../../routes/adminpanel';

const Admin: React.FC = () => {
  return (
    <FirebaseProps>
      <AdminPanel />
    </FirebaseProps>
  );
};

export default Admin;
