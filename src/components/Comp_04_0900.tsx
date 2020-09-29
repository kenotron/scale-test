// Comp_04_0900
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4500 from './Comp_05_4500';
import Comp_05_4501 from './Comp_05_4501';
import Comp_05_4502 from './Comp_05_4502';
import Comp_05_4503 from './Comp_05_4503';
import Comp_05_4504 from './Comp_05_4504';

const Comp_04_0900: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0900
      <div>
      <Comp_05_4500></Comp_05_4500>';
<Comp_05_4501></Comp_05_4501>';
<Comp_05_4502></Comp_05_4502>';
<Comp_05_4503></Comp_05_4503>';
<Comp_05_4504></Comp_05_4504>';
        </div>
      </div>;
};

export default Comp_04_0900;
