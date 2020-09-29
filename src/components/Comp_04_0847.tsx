// Comp_04_0847
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4235 from './Comp_05_4235';
import Comp_05_4236 from './Comp_05_4236';
import Comp_05_4237 from './Comp_05_4237';
import Comp_05_4238 from './Comp_05_4238';
import Comp_05_4239 from './Comp_05_4239';

const Comp_04_0847: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0847
      <div>
      <Comp_05_4235></Comp_05_4235>';
<Comp_05_4236></Comp_05_4236>';
<Comp_05_4237></Comp_05_4237>';
<Comp_05_4238></Comp_05_4238>';
<Comp_05_4239></Comp_05_4239>';
        </div>
      </div>;
};

export default Comp_04_0847;
