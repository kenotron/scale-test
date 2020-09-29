// Comp_04_0738
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3690 from './Comp_05_3690';
import Comp_05_3691 from './Comp_05_3691';
import Comp_05_3692 from './Comp_05_3692';
import Comp_05_3693 from './Comp_05_3693';
import Comp_05_3694 from './Comp_05_3694';

const Comp_04_0738: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0738
      <div>
      <Comp_05_3690></Comp_05_3690>';
<Comp_05_3691></Comp_05_3691>';
<Comp_05_3692></Comp_05_3692>';
<Comp_05_3693></Comp_05_3693>';
<Comp_05_3694></Comp_05_3694>';
        </div>
      </div>;
};

export default Comp_04_0738;
