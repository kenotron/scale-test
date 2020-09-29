// Comp_03_0160
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0800 from './Comp_04_0800';
import Comp_04_0801 from './Comp_04_0801';
import Comp_04_0802 from './Comp_04_0802';
import Comp_04_0803 from './Comp_04_0803';
import Comp_04_0804 from './Comp_04_0804';

const Comp_03_0160: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0160
      <div>
      <Comp_04_0800></Comp_04_0800>';
<Comp_04_0801></Comp_04_0801>';
<Comp_04_0802></Comp_04_0802>';
<Comp_04_0803></Comp_04_0803>';
<Comp_04_0804></Comp_04_0804>';
        </div>
      </div>;
};

export default Comp_03_0160;
