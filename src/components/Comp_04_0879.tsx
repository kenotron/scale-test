// Comp_04_0879
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4395 from './Comp_05_4395';
import Comp_05_4396 from './Comp_05_4396';
import Comp_05_4397 from './Comp_05_4397';
import Comp_05_4398 from './Comp_05_4398';
import Comp_05_4399 from './Comp_05_4399';

const Comp_04_0879: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0879
      <div>
      <Comp_05_4395></Comp_05_4395>';
<Comp_05_4396></Comp_05_4396>';
<Comp_05_4397></Comp_05_4397>';
<Comp_05_4398></Comp_05_4398>';
<Comp_05_4399></Comp_05_4399>';
        </div>
      </div>;
};

export default Comp_04_0879;
