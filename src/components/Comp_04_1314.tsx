// Comp_04_1314
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6570 from './Comp_05_6570';
import Comp_05_6571 from './Comp_05_6571';
import Comp_05_6572 from './Comp_05_6572';
import Comp_05_6573 from './Comp_05_6573';
import Comp_05_6574 from './Comp_05_6574';

const Comp_04_1314: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1314
      <div>
      <Comp_05_6570></Comp_05_6570>';
<Comp_05_6571></Comp_05_6571>';
<Comp_05_6572></Comp_05_6572>';
<Comp_05_6573></Comp_05_6573>';
<Comp_05_6574></Comp_05_6574>';
        </div>
      </div>;
};

export default Comp_04_1314;
