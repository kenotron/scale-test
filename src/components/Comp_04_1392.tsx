// Comp_04_1392
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6960 from './Comp_05_6960';
import Comp_05_6961 from './Comp_05_6961';
import Comp_05_6962 from './Comp_05_6962';
import Comp_05_6963 from './Comp_05_6963';
import Comp_05_6964 from './Comp_05_6964';

const Comp_04_1392: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1392
      <div>
      <Comp_05_6960></Comp_05_6960>';
<Comp_05_6961></Comp_05_6961>';
<Comp_05_6962></Comp_05_6962>';
<Comp_05_6963></Comp_05_6963>';
<Comp_05_6964></Comp_05_6964>';
        </div>
      </div>;
};

export default Comp_04_1392;
