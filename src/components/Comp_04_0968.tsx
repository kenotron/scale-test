// Comp_04_0968
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4840 from './Comp_05_4840';
import Comp_05_4841 from './Comp_05_4841';
import Comp_05_4842 from './Comp_05_4842';
import Comp_05_4843 from './Comp_05_4843';
import Comp_05_4844 from './Comp_05_4844';

const Comp_04_0968: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0968
      <div>
      <Comp_05_4840></Comp_05_4840>';
<Comp_05_4841></Comp_05_4841>';
<Comp_05_4842></Comp_05_4842>';
<Comp_05_4843></Comp_05_4843>';
<Comp_05_4844></Comp_05_4844>';
        </div>
      </div>;
};

export default Comp_04_0968;
