// Comp_04_1160
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5800 from './Comp_05_5800';
import Comp_05_5801 from './Comp_05_5801';
import Comp_05_5802 from './Comp_05_5802';
import Comp_05_5803 from './Comp_05_5803';
import Comp_05_5804 from './Comp_05_5804';

const Comp_04_1160: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1160
      <div>
      <Comp_05_5800></Comp_05_5800>';
<Comp_05_5801></Comp_05_5801>';
<Comp_05_5802></Comp_05_5802>';
<Comp_05_5803></Comp_05_5803>';
<Comp_05_5804></Comp_05_5804>';
        </div>
      </div>;
};

export default Comp_04_1160;
