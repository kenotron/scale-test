// Comp_04_0765
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3825 from './Comp_05_3825';
import Comp_05_3826 from './Comp_05_3826';
import Comp_05_3827 from './Comp_05_3827';
import Comp_05_3828 from './Comp_05_3828';
import Comp_05_3829 from './Comp_05_3829';

const Comp_04_0765: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0765
      <div>
      <Comp_05_3825></Comp_05_3825>';
<Comp_05_3826></Comp_05_3826>';
<Comp_05_3827></Comp_05_3827>';
<Comp_05_3828></Comp_05_3828>';
<Comp_05_3829></Comp_05_3829>';
        </div>
      </div>;
};

export default Comp_04_0765;
