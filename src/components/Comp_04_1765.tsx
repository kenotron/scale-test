// Comp_04_1765
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8825 from './Comp_05_8825';
import Comp_05_8826 from './Comp_05_8826';
import Comp_05_8827 from './Comp_05_8827';
import Comp_05_8828 from './Comp_05_8828';
import Comp_05_8829 from './Comp_05_8829';

const Comp_04_1765: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1765
      <div>
      <Comp_05_8825></Comp_05_8825>';
<Comp_05_8826></Comp_05_8826>';
<Comp_05_8827></Comp_05_8827>';
<Comp_05_8828></Comp_05_8828>';
<Comp_05_8829></Comp_05_8829>';
        </div>
      </div>;
};

export default Comp_04_1765;
