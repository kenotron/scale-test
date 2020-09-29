// Comp_04_1302
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6510 from './Comp_05_6510';
import Comp_05_6511 from './Comp_05_6511';
import Comp_05_6512 from './Comp_05_6512';
import Comp_05_6513 from './Comp_05_6513';
import Comp_05_6514 from './Comp_05_6514';

const Comp_04_1302: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1302
      <div>
      <Comp_05_6510></Comp_05_6510>';
<Comp_05_6511></Comp_05_6511>';
<Comp_05_6512></Comp_05_6512>';
<Comp_05_6513></Comp_05_6513>';
<Comp_05_6514></Comp_05_6514>';
        </div>
      </div>;
};

export default Comp_04_1302;
