// Comp_04_1152
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5760 from './Comp_05_5760';
import Comp_05_5761 from './Comp_05_5761';
import Comp_05_5762 from './Comp_05_5762';
import Comp_05_5763 from './Comp_05_5763';
import Comp_05_5764 from './Comp_05_5764';

const Comp_04_1152: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1152
      <div>
      <Comp_05_5760></Comp_05_5760>';
<Comp_05_5761></Comp_05_5761>';
<Comp_05_5762></Comp_05_5762>';
<Comp_05_5763></Comp_05_5763>';
<Comp_05_5764></Comp_05_5764>';
        </div>
      </div>;
};

export default Comp_04_1152;
