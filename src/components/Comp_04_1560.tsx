// Comp_04_1560
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7800 from './Comp_05_7800';
import Comp_05_7801 from './Comp_05_7801';
import Comp_05_7802 from './Comp_05_7802';
import Comp_05_7803 from './Comp_05_7803';
import Comp_05_7804 from './Comp_05_7804';

const Comp_04_1560: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1560
      <div>
      <Comp_05_7800></Comp_05_7800>';
<Comp_05_7801></Comp_05_7801>';
<Comp_05_7802></Comp_05_7802>';
<Comp_05_7803></Comp_05_7803>';
<Comp_05_7804></Comp_05_7804>';
        </div>
      </div>;
};

export default Comp_04_1560;
