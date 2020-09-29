// Comp_03_0297
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_1485 from './Comp_04_1485';
import Comp_04_1486 from './Comp_04_1486';
import Comp_04_1487 from './Comp_04_1487';
import Comp_04_1488 from './Comp_04_1488';
import Comp_04_1489 from './Comp_04_1489';

const Comp_03_0297: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0297
      <div>
      <Comp_04_1485></Comp_04_1485>';
<Comp_04_1486></Comp_04_1486>';
<Comp_04_1487></Comp_04_1487>';
<Comp_04_1488></Comp_04_1488>';
<Comp_04_1489></Comp_04_1489>';
        </div>
      </div>;
};

export default Comp_03_0297;
