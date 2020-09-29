// Comp_04_1285
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6425 from './Comp_05_6425';
import Comp_05_6426 from './Comp_05_6426';
import Comp_05_6427 from './Comp_05_6427';
import Comp_05_6428 from './Comp_05_6428';
import Comp_05_6429 from './Comp_05_6429';

const Comp_04_1285: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1285
      <div>
      <Comp_05_6425></Comp_05_6425>';
<Comp_05_6426></Comp_05_6426>';
<Comp_05_6427></Comp_05_6427>';
<Comp_05_6428></Comp_05_6428>';
<Comp_05_6429></Comp_05_6429>';
        </div>
      </div>;
};

export default Comp_04_1285;
