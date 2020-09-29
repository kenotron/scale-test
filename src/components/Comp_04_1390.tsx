// Comp_04_1390
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6950 from './Comp_05_6950';
import Comp_05_6951 from './Comp_05_6951';
import Comp_05_6952 from './Comp_05_6952';
import Comp_05_6953 from './Comp_05_6953';
import Comp_05_6954 from './Comp_05_6954';

const Comp_04_1390: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1390
      <div>
      <Comp_05_6950></Comp_05_6950>';
<Comp_05_6951></Comp_05_6951>';
<Comp_05_6952></Comp_05_6952>';
<Comp_05_6953></Comp_05_6953>';
<Comp_05_6954></Comp_05_6954>';
        </div>
      </div>;
};

export default Comp_04_1390;
