// Comp_04_0992
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4960 from './Comp_05_4960';
import Comp_05_4961 from './Comp_05_4961';
import Comp_05_4962 from './Comp_05_4962';
import Comp_05_4963 from './Comp_05_4963';
import Comp_05_4964 from './Comp_05_4964';

const Comp_04_0992: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0992
      <div>
      <Comp_05_4960></Comp_05_4960>';
<Comp_05_4961></Comp_05_4961>';
<Comp_05_4962></Comp_05_4962>';
<Comp_05_4963></Comp_05_4963>';
<Comp_05_4964></Comp_05_4964>';
        </div>
      </div>;
};

export default Comp_04_0992;
