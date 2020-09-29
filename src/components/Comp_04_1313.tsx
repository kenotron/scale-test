// Comp_04_1313
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6565 from './Comp_05_6565';
import Comp_05_6566 from './Comp_05_6566';
import Comp_05_6567 from './Comp_05_6567';
import Comp_05_6568 from './Comp_05_6568';
import Comp_05_6569 from './Comp_05_6569';

const Comp_04_1313: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1313
      <div>
      <Comp_05_6565></Comp_05_6565>';
<Comp_05_6566></Comp_05_6566>';
<Comp_05_6567></Comp_05_6567>';
<Comp_05_6568></Comp_05_6568>';
<Comp_05_6569></Comp_05_6569>';
        </div>
      </div>;
};

export default Comp_04_1313;
