// Comp_04_1097
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5485 from './Comp_05_5485';
import Comp_05_5486 from './Comp_05_5486';
import Comp_05_5487 from './Comp_05_5487';
import Comp_05_5488 from './Comp_05_5488';
import Comp_05_5489 from './Comp_05_5489';

const Comp_04_1097: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1097
      <div>
      <Comp_05_5485></Comp_05_5485>';
<Comp_05_5486></Comp_05_5486>';
<Comp_05_5487></Comp_05_5487>';
<Comp_05_5488></Comp_05_5488>';
<Comp_05_5489></Comp_05_5489>';
        </div>
      </div>;
};

export default Comp_04_1097;
