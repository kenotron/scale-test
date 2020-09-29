// Comp_04_0820
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4100 from './Comp_05_4100';
import Comp_05_4101 from './Comp_05_4101';
import Comp_05_4102 from './Comp_05_4102';
import Comp_05_4103 from './Comp_05_4103';
import Comp_05_4104 from './Comp_05_4104';

const Comp_04_0820: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0820
      <div>
      <Comp_05_4100></Comp_05_4100>';
<Comp_05_4101></Comp_05_4101>';
<Comp_05_4102></Comp_05_4102>';
<Comp_05_4103></Comp_05_4103>';
<Comp_05_4104></Comp_05_4104>';
        </div>
      </div>;
};

export default Comp_04_0820;
