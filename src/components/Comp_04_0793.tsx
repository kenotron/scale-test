// Comp_04_0793
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3965 from './Comp_05_3965';
import Comp_05_3966 from './Comp_05_3966';
import Comp_05_3967 from './Comp_05_3967';
import Comp_05_3968 from './Comp_05_3968';
import Comp_05_3969 from './Comp_05_3969';

const Comp_04_0793: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0793
      <div>
      <Comp_05_3965></Comp_05_3965>';
<Comp_05_3966></Comp_05_3966>';
<Comp_05_3967></Comp_05_3967>';
<Comp_05_3968></Comp_05_3968>';
<Comp_05_3969></Comp_05_3969>';
        </div>
      </div>;
};

export default Comp_04_0793;
