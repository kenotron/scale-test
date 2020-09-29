// Comp_04_0732
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3660 from './Comp_05_3660';
import Comp_05_3661 from './Comp_05_3661';
import Comp_05_3662 from './Comp_05_3662';
import Comp_05_3663 from './Comp_05_3663';
import Comp_05_3664 from './Comp_05_3664';

const Comp_04_0732: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0732
      <div>
      <Comp_05_3660></Comp_05_3660>';
<Comp_05_3661></Comp_05_3661>';
<Comp_05_3662></Comp_05_3662>';
<Comp_05_3663></Comp_05_3663>';
<Comp_05_3664></Comp_05_3664>';
        </div>
      </div>;
};

export default Comp_04_0732;
