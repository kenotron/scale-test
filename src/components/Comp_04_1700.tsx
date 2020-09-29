// Comp_04_1700
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8500 from './Comp_05_8500';
import Comp_05_8501 from './Comp_05_8501';
import Comp_05_8502 from './Comp_05_8502';
import Comp_05_8503 from './Comp_05_8503';
import Comp_05_8504 from './Comp_05_8504';

const Comp_04_1700: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1700
      <div>
      <Comp_05_8500></Comp_05_8500>';
<Comp_05_8501></Comp_05_8501>';
<Comp_05_8502></Comp_05_8502>';
<Comp_05_8503></Comp_05_8503>';
<Comp_05_8504></Comp_05_8504>';
        </div>
      </div>;
};

export default Comp_04_1700;
