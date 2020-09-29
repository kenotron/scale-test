// Comp_04_0746
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3730 from './Comp_05_3730';
import Comp_05_3731 from './Comp_05_3731';
import Comp_05_3732 from './Comp_05_3732';
import Comp_05_3733 from './Comp_05_3733';
import Comp_05_3734 from './Comp_05_3734';

const Comp_04_0746: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0746
      <div>
      <Comp_05_3730></Comp_05_3730>';
<Comp_05_3731></Comp_05_3731>';
<Comp_05_3732></Comp_05_3732>';
<Comp_05_3733></Comp_05_3733>';
<Comp_05_3734></Comp_05_3734>';
        </div>
      </div>;
};

export default Comp_04_0746;
