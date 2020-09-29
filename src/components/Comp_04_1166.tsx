// Comp_04_1166
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5830 from './Comp_05_5830';
import Comp_05_5831 from './Comp_05_5831';
import Comp_05_5832 from './Comp_05_5832';
import Comp_05_5833 from './Comp_05_5833';
import Comp_05_5834 from './Comp_05_5834';

const Comp_04_1166: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1166
      <div>
      <Comp_05_5830></Comp_05_5830>';
<Comp_05_5831></Comp_05_5831>';
<Comp_05_5832></Comp_05_5832>';
<Comp_05_5833></Comp_05_5833>';
<Comp_05_5834></Comp_05_5834>';
        </div>
      </div>;
};

export default Comp_04_1166;
