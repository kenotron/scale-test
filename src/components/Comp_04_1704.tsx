// Comp_04_1704
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8520 from './Comp_05_8520';
import Comp_05_8521 from './Comp_05_8521';
import Comp_05_8522 from './Comp_05_8522';
import Comp_05_8523 from './Comp_05_8523';
import Comp_05_8524 from './Comp_05_8524';

const Comp_04_1704: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1704
      <div>
      <Comp_05_8520></Comp_05_8520>';
<Comp_05_8521></Comp_05_8521>';
<Comp_05_8522></Comp_05_8522>';
<Comp_05_8523></Comp_05_8523>';
<Comp_05_8524></Comp_05_8524>';
        </div>
      </div>;
};

export default Comp_04_1704;
