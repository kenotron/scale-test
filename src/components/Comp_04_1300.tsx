// Comp_04_1300
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6500 from './Comp_05_6500';
import Comp_05_6501 from './Comp_05_6501';
import Comp_05_6502 from './Comp_05_6502';
import Comp_05_6503 from './Comp_05_6503';
import Comp_05_6504 from './Comp_05_6504';

const Comp_04_1300: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1300
      <div>
      <Comp_05_6500></Comp_05_6500>';
<Comp_05_6501></Comp_05_6501>';
<Comp_05_6502></Comp_05_6502>';
<Comp_05_6503></Comp_05_6503>';
<Comp_05_6504></Comp_05_6504>';
        </div>
      </div>;
};

export default Comp_04_1300;
