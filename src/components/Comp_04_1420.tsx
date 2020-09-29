// Comp_04_1420
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7100 from './Comp_05_7100';
import Comp_05_7101 from './Comp_05_7101';
import Comp_05_7102 from './Comp_05_7102';
import Comp_05_7103 from './Comp_05_7103';
import Comp_05_7104 from './Comp_05_7104';

const Comp_04_1420: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1420
      <div>
      <Comp_05_7100></Comp_05_7100>';
<Comp_05_7101></Comp_05_7101>';
<Comp_05_7102></Comp_05_7102>';
<Comp_05_7103></Comp_05_7103>';
<Comp_05_7104></Comp_05_7104>';
        </div>
      </div>;
};

export default Comp_04_1420;
