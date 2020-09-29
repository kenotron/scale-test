// Comp_03_0201
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_1005 from './Comp_04_1005';
import Comp_04_1006 from './Comp_04_1006';
import Comp_04_1007 from './Comp_04_1007';
import Comp_04_1008 from './Comp_04_1008';
import Comp_04_1009 from './Comp_04_1009';

const Comp_03_0201: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0201
      <div>
      <Comp_04_1005></Comp_04_1005>';
<Comp_04_1006></Comp_04_1006>';
<Comp_04_1007></Comp_04_1007>';
<Comp_04_1008></Comp_04_1008>';
<Comp_04_1009></Comp_04_1009>';
        </div>
      </div>;
};

export default Comp_03_0201;
