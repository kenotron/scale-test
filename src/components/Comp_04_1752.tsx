// Comp_04_1752
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8760 from './Comp_05_8760';
import Comp_05_8761 from './Comp_05_8761';
import Comp_05_8762 from './Comp_05_8762';
import Comp_05_8763 from './Comp_05_8763';
import Comp_05_8764 from './Comp_05_8764';

const Comp_04_1752: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1752
      <div>
      <Comp_05_8760></Comp_05_8760>';
<Comp_05_8761></Comp_05_8761>';
<Comp_05_8762></Comp_05_8762>';
<Comp_05_8763></Comp_05_8763>';
<Comp_05_8764></Comp_05_8764>';
        </div>
      </div>;
};

export default Comp_04_1752;
