// Comp_04_1020
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5100 from './Comp_05_5100';
import Comp_05_5101 from './Comp_05_5101';
import Comp_05_5102 from './Comp_05_5102';
import Comp_05_5103 from './Comp_05_5103';
import Comp_05_5104 from './Comp_05_5104';

const Comp_04_1020: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1020
      <div>
      <Comp_05_5100></Comp_05_5100>';
<Comp_05_5101></Comp_05_5101>';
<Comp_05_5102></Comp_05_5102>';
<Comp_05_5103></Comp_05_5103>';
<Comp_05_5104></Comp_05_5104>';
        </div>
      </div>;
};

export default Comp_04_1020;
