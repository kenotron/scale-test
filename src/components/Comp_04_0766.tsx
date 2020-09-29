// Comp_04_0766
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3830 from './Comp_05_3830';
import Comp_05_3831 from './Comp_05_3831';
import Comp_05_3832 from './Comp_05_3832';
import Comp_05_3833 from './Comp_05_3833';
import Comp_05_3834 from './Comp_05_3834';

const Comp_04_0766: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0766
      <div>
      <Comp_05_3830></Comp_05_3830>';
<Comp_05_3831></Comp_05_3831>';
<Comp_05_3832></Comp_05_3832>';
<Comp_05_3833></Comp_05_3833>';
<Comp_05_3834></Comp_05_3834>';
        </div>
      </div>;
};

export default Comp_04_0766;
