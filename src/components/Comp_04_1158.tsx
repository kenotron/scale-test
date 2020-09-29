// Comp_04_1158
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5790 from './Comp_05_5790';
import Comp_05_5791 from './Comp_05_5791';
import Comp_05_5792 from './Comp_05_5792';
import Comp_05_5793 from './Comp_05_5793';
import Comp_05_5794 from './Comp_05_5794';

const Comp_04_1158: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1158
      <div>
      <Comp_05_5790></Comp_05_5790>';
<Comp_05_5791></Comp_05_5791>';
<Comp_05_5792></Comp_05_5792>';
<Comp_05_5793></Comp_05_5793>';
<Comp_05_5794></Comp_05_5794>';
        </div>
      </div>;
};

export default Comp_04_1158;
