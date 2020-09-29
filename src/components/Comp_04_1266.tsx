// Comp_04_1266
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6330 from './Comp_05_6330';
import Comp_05_6331 from './Comp_05_6331';
import Comp_05_6332 from './Comp_05_6332';
import Comp_05_6333 from './Comp_05_6333';
import Comp_05_6334 from './Comp_05_6334';

const Comp_04_1266: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1266
      <div>
      <Comp_05_6330></Comp_05_6330>';
<Comp_05_6331></Comp_05_6331>';
<Comp_05_6332></Comp_05_6332>';
<Comp_05_6333></Comp_05_6333>';
<Comp_05_6334></Comp_05_6334>';
        </div>
      </div>;
};

export default Comp_04_1266;
