// Comp_04_1126
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5630 from './Comp_05_5630';
import Comp_05_5631 from './Comp_05_5631';
import Comp_05_5632 from './Comp_05_5632';
import Comp_05_5633 from './Comp_05_5633';
import Comp_05_5634 from './Comp_05_5634';

const Comp_04_1126: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1126
      <div>
      <Comp_05_5630></Comp_05_5630>';
<Comp_05_5631></Comp_05_5631>';
<Comp_05_5632></Comp_05_5632>';
<Comp_05_5633></Comp_05_5633>';
<Comp_05_5634></Comp_05_5634>';
        </div>
      </div>;
};

export default Comp_04_1126;
