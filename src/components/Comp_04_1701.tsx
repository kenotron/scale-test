// Comp_04_1701
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8505 from './Comp_05_8505';
import Comp_05_8506 from './Comp_05_8506';
import Comp_05_8507 from './Comp_05_8507';
import Comp_05_8508 from './Comp_05_8508';
import Comp_05_8509 from './Comp_05_8509';

const Comp_04_1701: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1701
      <div>
      <Comp_05_8505></Comp_05_8505>';
<Comp_05_8506></Comp_05_8506>';
<Comp_05_8507></Comp_05_8507>';
<Comp_05_8508></Comp_05_8508>';
<Comp_05_8509></Comp_05_8509>';
        </div>
      </div>;
};

export default Comp_04_1701;
