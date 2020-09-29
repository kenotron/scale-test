// Comp_04_1288
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6440 from './Comp_05_6440';
import Comp_05_6441 from './Comp_05_6441';
import Comp_05_6442 from './Comp_05_6442';
import Comp_05_6443 from './Comp_05_6443';
import Comp_05_6444 from './Comp_05_6444';

const Comp_04_1288: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1288
      <div>
      <Comp_05_6440></Comp_05_6440>';
<Comp_05_6441></Comp_05_6441>';
<Comp_05_6442></Comp_05_6442>';
<Comp_05_6443></Comp_05_6443>';
<Comp_05_6444></Comp_05_6444>';
        </div>
      </div>;
};

export default Comp_04_1288;
