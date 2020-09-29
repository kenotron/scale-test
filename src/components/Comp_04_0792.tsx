// Comp_04_0792
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3960 from './Comp_05_3960';
import Comp_05_3961 from './Comp_05_3961';
import Comp_05_3962 from './Comp_05_3962';
import Comp_05_3963 from './Comp_05_3963';
import Comp_05_3964 from './Comp_05_3964';

const Comp_04_0792: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0792
      <div>
      <Comp_05_3960></Comp_05_3960>';
<Comp_05_3961></Comp_05_3961>';
<Comp_05_3962></Comp_05_3962>';
<Comp_05_3963></Comp_05_3963>';
<Comp_05_3964></Comp_05_3964>';
        </div>
      </div>;
};

export default Comp_04_0792;
