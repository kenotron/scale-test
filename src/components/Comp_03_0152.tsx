// Comp_03_0152
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0760 from './Comp_04_0760';
import Comp_04_0761 from './Comp_04_0761';
import Comp_04_0762 from './Comp_04_0762';
import Comp_04_0763 from './Comp_04_0763';
import Comp_04_0764 from './Comp_04_0764';

const Comp_03_0152: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0152
      <div>
      <Comp_04_0760></Comp_04_0760>';
<Comp_04_0761></Comp_04_0761>';
<Comp_04_0762></Comp_04_0762>';
<Comp_04_0763></Comp_04_0763>';
<Comp_04_0764></Comp_04_0764>';
        </div>
      </div>;
};

export default Comp_03_0152;
