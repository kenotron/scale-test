// Comp_04_1360
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6800 from './Comp_05_6800';
import Comp_05_6801 from './Comp_05_6801';
import Comp_05_6802 from './Comp_05_6802';
import Comp_05_6803 from './Comp_05_6803';
import Comp_05_6804 from './Comp_05_6804';

const Comp_04_1360: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1360
      <div>
      <Comp_05_6800></Comp_05_6800>';
<Comp_05_6801></Comp_05_6801>';
<Comp_05_6802></Comp_05_6802>';
<Comp_05_6803></Comp_05_6803>';
<Comp_05_6804></Comp_05_6804>';
        </div>
      </div>;
};

export default Comp_04_1360;
