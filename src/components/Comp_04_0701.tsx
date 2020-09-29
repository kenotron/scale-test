// Comp_04_0701
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3505 from './Comp_05_3505';
import Comp_05_3506 from './Comp_05_3506';
import Comp_05_3507 from './Comp_05_3507';
import Comp_05_3508 from './Comp_05_3508';
import Comp_05_3509 from './Comp_05_3509';

const Comp_04_0701: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0701
      <div>
      <Comp_05_3505></Comp_05_3505>';
<Comp_05_3506></Comp_05_3506>';
<Comp_05_3507></Comp_05_3507>';
<Comp_05_3508></Comp_05_3508>';
<Comp_05_3509></Comp_05_3509>';
        </div>
      </div>;
};

export default Comp_04_0701;
