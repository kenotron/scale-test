// Comp_04_1341
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6705 from './Comp_05_6705';
import Comp_05_6706 from './Comp_05_6706';
import Comp_05_6707 from './Comp_05_6707';
import Comp_05_6708 from './Comp_05_6708';
import Comp_05_6709 from './Comp_05_6709';

const Comp_04_1341: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1341
      <div>
      <Comp_05_6705></Comp_05_6705>';
<Comp_05_6706></Comp_05_6706>';
<Comp_05_6707></Comp_05_6707>';
<Comp_05_6708></Comp_05_6708>';
<Comp_05_6709></Comp_05_6709>';
        </div>
      </div>;
};

export default Comp_04_1341;
