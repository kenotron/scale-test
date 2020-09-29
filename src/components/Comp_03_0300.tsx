// Comp_03_0300
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_1500 from './Comp_04_1500';
import Comp_04_1501 from './Comp_04_1501';
import Comp_04_1502 from './Comp_04_1502';
import Comp_04_1503 from './Comp_04_1503';
import Comp_04_1504 from './Comp_04_1504';

const Comp_03_0300: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0300
      <div>
      <Comp_04_1500></Comp_04_1500>';
<Comp_04_1501></Comp_04_1501>';
<Comp_04_1502></Comp_04_1502>';
<Comp_04_1503></Comp_04_1503>';
<Comp_04_1504></Comp_04_1504>';
        </div>
      </div>;
};

export default Comp_03_0300;
