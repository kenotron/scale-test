// Comp_04_0734
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3670 from './Comp_05_3670';
import Comp_05_3671 from './Comp_05_3671';
import Comp_05_3672 from './Comp_05_3672';
import Comp_05_3673 from './Comp_05_3673';
import Comp_05_3674 from './Comp_05_3674';

const Comp_04_0734: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0734
      <div>
      <Comp_05_3670></Comp_05_3670>';
<Comp_05_3671></Comp_05_3671>';
<Comp_05_3672></Comp_05_3672>';
<Comp_05_3673></Comp_05_3673>';
<Comp_05_3674></Comp_05_3674>';
        </div>
      </div>;
};

export default Comp_04_0734;
