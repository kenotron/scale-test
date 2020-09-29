// Comp_04_1060
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5300 from './Comp_05_5300';
import Comp_05_5301 from './Comp_05_5301';
import Comp_05_5302 from './Comp_05_5302';
import Comp_05_5303 from './Comp_05_5303';
import Comp_05_5304 from './Comp_05_5304';

const Comp_04_1060: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1060
      <div>
      <Comp_05_5300></Comp_05_5300>';
<Comp_05_5301></Comp_05_5301>';
<Comp_05_5302></Comp_05_5302>';
<Comp_05_5303></Comp_05_5303>';
<Comp_05_5304></Comp_05_5304>';
        </div>
      </div>;
};

export default Comp_04_1060;
