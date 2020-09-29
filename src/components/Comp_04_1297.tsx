// Comp_04_1297
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6485 from './Comp_05_6485';
import Comp_05_6486 from './Comp_05_6486';
import Comp_05_6487 from './Comp_05_6487';
import Comp_05_6488 from './Comp_05_6488';
import Comp_05_6489 from './Comp_05_6489';

const Comp_04_1297: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1297
      <div>
      <Comp_05_6485></Comp_05_6485>';
<Comp_05_6486></Comp_05_6486>';
<Comp_05_6487></Comp_05_6487>';
<Comp_05_6488></Comp_05_6488>';
<Comp_05_6489></Comp_05_6489>';
        </div>
      </div>;
};

export default Comp_04_1297;
