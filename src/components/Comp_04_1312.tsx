// Comp_04_1312
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6560 from './Comp_05_6560';
import Comp_05_6561 from './Comp_05_6561';
import Comp_05_6562 from './Comp_05_6562';
import Comp_05_6563 from './Comp_05_6563';
import Comp_05_6564 from './Comp_05_6564';

const Comp_04_1312: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1312
      <div>
      <Comp_05_6560></Comp_05_6560>';
<Comp_05_6561></Comp_05_6561>';
<Comp_05_6562></Comp_05_6562>';
<Comp_05_6563></Comp_05_6563>';
<Comp_05_6564></Comp_05_6564>';
        </div>
      </div>;
};

export default Comp_04_1312;
