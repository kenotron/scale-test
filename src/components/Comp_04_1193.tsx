// Comp_04_1193
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5965 from './Comp_05_5965';
import Comp_05_5966 from './Comp_05_5966';
import Comp_05_5967 from './Comp_05_5967';
import Comp_05_5968 from './Comp_05_5968';
import Comp_05_5969 from './Comp_05_5969';

const Comp_04_1193: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1193
      <div>
      <Comp_05_5965></Comp_05_5965>';
<Comp_05_5966></Comp_05_5966>';
<Comp_05_5967></Comp_05_5967>';
<Comp_05_5968></Comp_05_5968>';
<Comp_05_5969></Comp_05_5969>';
        </div>
      </div>;
};

export default Comp_04_1193;
