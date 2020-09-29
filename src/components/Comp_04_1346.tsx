// Comp_04_1346
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6730 from './Comp_05_6730';
import Comp_05_6731 from './Comp_05_6731';
import Comp_05_6732 from './Comp_05_6732';
import Comp_05_6733 from './Comp_05_6733';
import Comp_05_6734 from './Comp_05_6734';

const Comp_04_1346: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1346
      <div>
      <Comp_05_6730></Comp_05_6730>';
<Comp_05_6731></Comp_05_6731>';
<Comp_05_6732></Comp_05_6732>';
<Comp_05_6733></Comp_05_6733>';
<Comp_05_6734></Comp_05_6734>';
        </div>
      </div>;
};

export default Comp_04_1346;
