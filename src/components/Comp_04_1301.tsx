// Comp_04_1301
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6505 from './Comp_05_6505';
import Comp_05_6506 from './Comp_05_6506';
import Comp_05_6507 from './Comp_05_6507';
import Comp_05_6508 from './Comp_05_6508';
import Comp_05_6509 from './Comp_05_6509';

const Comp_04_1301: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1301
      <div>
      <Comp_05_6505></Comp_05_6505>';
<Comp_05_6506></Comp_05_6506>';
<Comp_05_6507></Comp_05_6507>';
<Comp_05_6508></Comp_05_6508>';
<Comp_05_6509></Comp_05_6509>';
        </div>
      </div>;
};

export default Comp_04_1301;
