// Comp_04_1146
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5730 from './Comp_05_5730';
import Comp_05_5731 from './Comp_05_5731';
import Comp_05_5732 from './Comp_05_5732';
import Comp_05_5733 from './Comp_05_5733';
import Comp_05_5734 from './Comp_05_5734';

const Comp_04_1146: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1146
      <div>
      <Comp_05_5730></Comp_05_5730>';
<Comp_05_5731></Comp_05_5731>';
<Comp_05_5732></Comp_05_5732>';
<Comp_05_5733></Comp_05_5733>';
<Comp_05_5734></Comp_05_5734>';
        </div>
      </div>;
};

export default Comp_04_1146;
