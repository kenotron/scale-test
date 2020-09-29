// Comp_04_1153
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5765 from './Comp_05_5765';
import Comp_05_5766 from './Comp_05_5766';
import Comp_05_5767 from './Comp_05_5767';
import Comp_05_5768 from './Comp_05_5768';
import Comp_05_5769 from './Comp_05_5769';

const Comp_04_1153: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1153
      <div>
      <Comp_05_5765></Comp_05_5765>';
<Comp_05_5766></Comp_05_5766>';
<Comp_05_5767></Comp_05_5767>';
<Comp_05_5768></Comp_05_5768>';
<Comp_05_5769></Comp_05_5769>';
        </div>
      </div>;
};

export default Comp_04_1153;
