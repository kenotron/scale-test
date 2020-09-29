// Comp_04_1732
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8660 from './Comp_05_8660';
import Comp_05_8661 from './Comp_05_8661';
import Comp_05_8662 from './Comp_05_8662';
import Comp_05_8663 from './Comp_05_8663';
import Comp_05_8664 from './Comp_05_8664';

const Comp_04_1732: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1732
      <div>
      <Comp_05_8660></Comp_05_8660>';
<Comp_05_8661></Comp_05_8661>';
<Comp_05_8662></Comp_05_8662>';
<Comp_05_8663></Comp_05_8663>';
<Comp_05_8664></Comp_05_8664>';
        </div>
      </div>;
};

export default Comp_04_1732;
