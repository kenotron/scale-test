// Comp_04_1393
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6965 from './Comp_05_6965';
import Comp_05_6966 from './Comp_05_6966';
import Comp_05_6967 from './Comp_05_6967';
import Comp_05_6968 from './Comp_05_6968';
import Comp_05_6969 from './Comp_05_6969';

const Comp_04_1393: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1393
      <div>
      <Comp_05_6965></Comp_05_6965>';
<Comp_05_6966></Comp_05_6966>';
<Comp_05_6967></Comp_05_6967>';
<Comp_05_6968></Comp_05_6968>';
<Comp_05_6969></Comp_05_6969>';
        </div>
      </div>;
};

export default Comp_04_1393;
