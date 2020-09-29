// Comp_04_1338
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6690 from './Comp_05_6690';
import Comp_05_6691 from './Comp_05_6691';
import Comp_05_6692 from './Comp_05_6692';
import Comp_05_6693 from './Comp_05_6693';
import Comp_05_6694 from './Comp_05_6694';

const Comp_04_1338: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1338
      <div>
      <Comp_05_6690></Comp_05_6690>';
<Comp_05_6691></Comp_05_6691>';
<Comp_05_6692></Comp_05_6692>';
<Comp_05_6693></Comp_05_6693>';
<Comp_05_6694></Comp_05_6694>';
        </div>
      </div>;
};

export default Comp_04_1338;
