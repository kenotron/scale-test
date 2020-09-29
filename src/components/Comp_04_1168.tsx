// Comp_04_1168
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5840 from './Comp_05_5840';
import Comp_05_5841 from './Comp_05_5841';
import Comp_05_5842 from './Comp_05_5842';
import Comp_05_5843 from './Comp_05_5843';
import Comp_05_5844 from './Comp_05_5844';

const Comp_04_1168: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1168
      <div>
      <Comp_05_5840></Comp_05_5840>';
<Comp_05_5841></Comp_05_5841>';
<Comp_05_5842></Comp_05_5842>';
<Comp_05_5843></Comp_05_5843>';
<Comp_05_5844></Comp_05_5844>';
        </div>
      </div>;
};

export default Comp_04_1168;
