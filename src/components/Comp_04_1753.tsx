// Comp_04_1753
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8765 from './Comp_05_8765';
import Comp_05_8766 from './Comp_05_8766';
import Comp_05_8767 from './Comp_05_8767';
import Comp_05_8768 from './Comp_05_8768';
import Comp_05_8769 from './Comp_05_8769';

const Comp_04_1753: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1753
      <div>
      <Comp_05_8765></Comp_05_8765>';
<Comp_05_8766></Comp_05_8766>';
<Comp_05_8767></Comp_05_8767>';
<Comp_05_8768></Comp_05_8768>';
<Comp_05_8769></Comp_05_8769>';
        </div>
      </div>;
};

export default Comp_04_1753;
