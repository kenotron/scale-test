// Comp_04_1136
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5680 from './Comp_05_5680';
import Comp_05_5681 from './Comp_05_5681';
import Comp_05_5682 from './Comp_05_5682';
import Comp_05_5683 from './Comp_05_5683';
import Comp_05_5684 from './Comp_05_5684';

const Comp_04_1136: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1136
      <div>
      <Comp_05_5680></Comp_05_5680>';
<Comp_05_5681></Comp_05_5681>';
<Comp_05_5682></Comp_05_5682>';
<Comp_05_5683></Comp_05_5683>';
<Comp_05_5684></Comp_05_5684>';
        </div>
      </div>;
};

export default Comp_04_1136;
