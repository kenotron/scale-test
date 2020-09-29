// Comp_04_1247
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6235 from './Comp_05_6235';
import Comp_05_6236 from './Comp_05_6236';
import Comp_05_6237 from './Comp_05_6237';
import Comp_05_6238 from './Comp_05_6238';
import Comp_05_6239 from './Comp_05_6239';

const Comp_04_1247: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1247
      <div>
      <Comp_05_6235></Comp_05_6235>';
<Comp_05_6236></Comp_05_6236>';
<Comp_05_6237></Comp_05_6237>';
<Comp_05_6238></Comp_05_6238>';
<Comp_05_6239></Comp_05_6239>';
        </div>
      </div>;
};

export default Comp_04_1247;
