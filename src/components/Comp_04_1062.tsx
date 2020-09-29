// Comp_04_1062
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5310 from './Comp_05_5310';
import Comp_05_5311 from './Comp_05_5311';
import Comp_05_5312 from './Comp_05_5312';
import Comp_05_5313 from './Comp_05_5313';
import Comp_05_5314 from './Comp_05_5314';

const Comp_04_1062: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1062
      <div>
      <Comp_05_5310></Comp_05_5310>';
<Comp_05_5311></Comp_05_5311>';
<Comp_05_5312></Comp_05_5312>';
<Comp_05_5313></Comp_05_5313>';
<Comp_05_5314></Comp_05_5314>';
        </div>
      </div>;
};

export default Comp_04_1062;
