// Comp_04_0700
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3500 from './Comp_05_3500';
import Comp_05_3501 from './Comp_05_3501';
import Comp_05_3502 from './Comp_05_3502';
import Comp_05_3503 from './Comp_05_3503';
import Comp_05_3504 from './Comp_05_3504';

const Comp_04_0700: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0700
      <div>
      <Comp_05_3500></Comp_05_3500>';
<Comp_05_3501></Comp_05_3501>';
<Comp_05_3502></Comp_05_3502>';
<Comp_05_3503></Comp_05_3503>';
<Comp_05_3504></Comp_05_3504>';
        </div>
      </div>;
};

export default Comp_04_0700;
