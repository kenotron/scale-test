// Comp_04_0660
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3300 from './Comp_05_3300';
import Comp_05_3301 from './Comp_05_3301';
import Comp_05_3302 from './Comp_05_3302';
import Comp_05_3303 from './Comp_05_3303';
import Comp_05_3304 from './Comp_05_3304';

const Comp_04_0660: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0660
      <div>
      <Comp_05_3300></Comp_05_3300>';
<Comp_05_3301></Comp_05_3301>';
<Comp_05_3302></Comp_05_3302>';
<Comp_05_3303></Comp_05_3303>';
<Comp_05_3304></Comp_05_3304>';
        </div>
      </div>;
};

export default Comp_04_0660;
