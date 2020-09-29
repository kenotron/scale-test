// Comp_04_1592
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7960 from './Comp_05_7960';
import Comp_05_7961 from './Comp_05_7961';
import Comp_05_7962 from './Comp_05_7962';
import Comp_05_7963 from './Comp_05_7963';
import Comp_05_7964 from './Comp_05_7964';

const Comp_04_1592: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1592
      <div>
      <Comp_05_7960></Comp_05_7960>';
<Comp_05_7961></Comp_05_7961>';
<Comp_05_7962></Comp_05_7962>';
<Comp_05_7963></Comp_05_7963>';
<Comp_05_7964></Comp_05_7964>';
        </div>
      </div>;
};

export default Comp_04_1592;
