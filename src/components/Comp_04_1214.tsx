// Comp_04_1214
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6070 from './Comp_05_6070';
import Comp_05_6071 from './Comp_05_6071';
import Comp_05_6072 from './Comp_05_6072';
import Comp_05_6073 from './Comp_05_6073';
import Comp_05_6074 from './Comp_05_6074';

const Comp_04_1214: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1214
      <div>
      <Comp_05_6070></Comp_05_6070>';
<Comp_05_6071></Comp_05_6071>';
<Comp_05_6072></Comp_05_6072>';
<Comp_05_6073></Comp_05_6073>';
<Comp_05_6074></Comp_05_6074>';
        </div>
      </div>;
};

export default Comp_04_1214;
