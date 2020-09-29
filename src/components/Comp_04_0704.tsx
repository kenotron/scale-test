// Comp_04_0704
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3520 from './Comp_05_3520';
import Comp_05_3521 from './Comp_05_3521';
import Comp_05_3522 from './Comp_05_3522';
import Comp_05_3523 from './Comp_05_3523';
import Comp_05_3524 from './Comp_05_3524';

const Comp_04_0704: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0704
      <div>
      <Comp_05_3520></Comp_05_3520>';
<Comp_05_3521></Comp_05_3521>';
<Comp_05_3522></Comp_05_3522>';
<Comp_05_3523></Comp_05_3523>';
<Comp_05_3524></Comp_05_3524>';
        </div>
      </div>;
};

export default Comp_04_0704;
