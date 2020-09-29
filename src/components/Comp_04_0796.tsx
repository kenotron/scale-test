// Comp_04_0796
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3980 from './Comp_05_3980';
import Comp_05_3981 from './Comp_05_3981';
import Comp_05_3982 from './Comp_05_3982';
import Comp_05_3983 from './Comp_05_3983';
import Comp_05_3984 from './Comp_05_3984';

const Comp_04_0796: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0796
      <div>
      <Comp_05_3980></Comp_05_3980>';
<Comp_05_3981></Comp_05_3981>';
<Comp_05_3982></Comp_05_3982>';
<Comp_05_3983></Comp_05_3983>';
<Comp_05_3984></Comp_05_3984>';
        </div>
      </div>;
};

export default Comp_04_0796;
