// Comp_04_1260
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6300 from './Comp_05_6300';
import Comp_05_6301 from './Comp_05_6301';
import Comp_05_6302 from './Comp_05_6302';
import Comp_05_6303 from './Comp_05_6303';
import Comp_05_6304 from './Comp_05_6304';

const Comp_04_1260: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1260
      <div>
      <Comp_05_6300></Comp_05_6300>';
<Comp_05_6301></Comp_05_6301>';
<Comp_05_6302></Comp_05_6302>';
<Comp_05_6303></Comp_05_6303>';
<Comp_05_6304></Comp_05_6304>';
        </div>
      </div>;
};

export default Comp_04_1260;
