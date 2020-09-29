// Comp_04_1796
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8980 from './Comp_05_8980';
import Comp_05_8981 from './Comp_05_8981';
import Comp_05_8982 from './Comp_05_8982';
import Comp_05_8983 from './Comp_05_8983';
import Comp_05_8984 from './Comp_05_8984';

const Comp_04_1796: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1796
      <div>
      <Comp_05_8980></Comp_05_8980>';
<Comp_05_8981></Comp_05_8981>';
<Comp_05_8982></Comp_05_8982>';
<Comp_05_8983></Comp_05_8983>';
<Comp_05_8984></Comp_05_8984>';
        </div>
      </div>;
};

export default Comp_04_1796;
