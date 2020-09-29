// Comp_04_1793
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8965 from './Comp_05_8965';
import Comp_05_8966 from './Comp_05_8966';
import Comp_05_8967 from './Comp_05_8967';
import Comp_05_8968 from './Comp_05_8968';
import Comp_05_8969 from './Comp_05_8969';

const Comp_04_1793: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1793
      <div>
      <Comp_05_8965></Comp_05_8965>';
<Comp_05_8966></Comp_05_8966>';
<Comp_05_8967></Comp_05_8967>';
<Comp_05_8968></Comp_05_8968>';
<Comp_05_8969></Comp_05_8969>';
        </div>
      </div>;
};

export default Comp_04_1793;
