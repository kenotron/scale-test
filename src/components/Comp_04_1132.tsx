// Comp_04_1132
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5660 from './Comp_05_5660';
import Comp_05_5661 from './Comp_05_5661';
import Comp_05_5662 from './Comp_05_5662';
import Comp_05_5663 from './Comp_05_5663';
import Comp_05_5664 from './Comp_05_5664';

const Comp_04_1132: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1132
      <div>
      <Comp_05_5660></Comp_05_5660>';
<Comp_05_5661></Comp_05_5661>';
<Comp_05_5662></Comp_05_5662>';
<Comp_05_5663></Comp_05_5663>';
<Comp_05_5664></Comp_05_5664>';
        </div>
      </div>;
};

export default Comp_04_1132;
