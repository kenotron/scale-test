// Comp_04_1127
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5635 from './Comp_05_5635';
import Comp_05_5636 from './Comp_05_5636';
import Comp_05_5637 from './Comp_05_5637';
import Comp_05_5638 from './Comp_05_5638';
import Comp_05_5639 from './Comp_05_5639';

const Comp_04_1127: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1127
      <div>
      <Comp_05_5635></Comp_05_5635>';
<Comp_05_5636></Comp_05_5636>';
<Comp_05_5637></Comp_05_5637>';
<Comp_05_5638></Comp_05_5638>';
<Comp_05_5639></Comp_05_5639>';
        </div>
      </div>;
};

export default Comp_04_1127;
