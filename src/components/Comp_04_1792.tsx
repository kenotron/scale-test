// Comp_04_1792
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8960 from './Comp_05_8960';
import Comp_05_8961 from './Comp_05_8961';
import Comp_05_8962 from './Comp_05_8962';
import Comp_05_8963 from './Comp_05_8963';
import Comp_05_8964 from './Comp_05_8964';

const Comp_04_1792: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1792
      <div>
      <Comp_05_8960></Comp_05_8960>';
<Comp_05_8961></Comp_05_8961>';
<Comp_05_8962></Comp_05_8962>';
<Comp_05_8963></Comp_05_8963>';
<Comp_05_8964></Comp_05_8964>';
        </div>
      </div>;
};

export default Comp_04_1792;
