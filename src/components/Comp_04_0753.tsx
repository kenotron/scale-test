// Comp_04_0753
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3765 from './Comp_05_3765';
import Comp_05_3766 from './Comp_05_3766';
import Comp_05_3767 from './Comp_05_3767';
import Comp_05_3768 from './Comp_05_3768';
import Comp_05_3769 from './Comp_05_3769';

const Comp_04_0753: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0753
      <div>
      <Comp_05_3765></Comp_05_3765>';
<Comp_05_3766></Comp_05_3766>';
<Comp_05_3767></Comp_05_3767>';
<Comp_05_3768></Comp_05_3768>';
<Comp_05_3769></Comp_05_3769>';
        </div>
      </div>;
};

export default Comp_04_0753;
