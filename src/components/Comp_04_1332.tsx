// Comp_04_1332
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6660 from './Comp_05_6660';
import Comp_05_6661 from './Comp_05_6661';
import Comp_05_6662 from './Comp_05_6662';
import Comp_05_6663 from './Comp_05_6663';
import Comp_05_6664 from './Comp_05_6664';

const Comp_04_1332: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1332
      <div>
      <Comp_05_6660></Comp_05_6660>';
<Comp_05_6661></Comp_05_6661>';
<Comp_05_6662></Comp_05_6662>';
<Comp_05_6663></Comp_05_6663>';
<Comp_05_6664></Comp_05_6664>';
        </div>
      </div>;
};

export default Comp_04_1332;
