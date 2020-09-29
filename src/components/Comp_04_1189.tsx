// Comp_04_1189
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5945 from './Comp_05_5945';
import Comp_05_5946 from './Comp_05_5946';
import Comp_05_5947 from './Comp_05_5947';
import Comp_05_5948 from './Comp_05_5948';
import Comp_05_5949 from './Comp_05_5949';

const Comp_04_1189: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1189
      <div>
      <Comp_05_5945></Comp_05_5945>';
<Comp_05_5946></Comp_05_5946>';
<Comp_05_5947></Comp_05_5947>';
<Comp_05_5948></Comp_05_5948>';
<Comp_05_5949></Comp_05_5949>';
        </div>
      </div>;
};

export default Comp_04_1189;
