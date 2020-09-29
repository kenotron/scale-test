// Comp_04_0758
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3790 from './Comp_05_3790';
import Comp_05_3791 from './Comp_05_3791';
import Comp_05_3792 from './Comp_05_3792';
import Comp_05_3793 from './Comp_05_3793';
import Comp_05_3794 from './Comp_05_3794';

const Comp_04_0758: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0758
      <div>
      <Comp_05_3790></Comp_05_3790>';
<Comp_05_3791></Comp_05_3791>';
<Comp_05_3792></Comp_05_3792>';
<Comp_05_3793></Comp_05_3793>';
<Comp_05_3794></Comp_05_3794>';
        </div>
      </div>;
};

export default Comp_04_0758;
