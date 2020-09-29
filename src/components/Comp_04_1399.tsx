// Comp_04_1399
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6995 from './Comp_05_6995';
import Comp_05_6996 from './Comp_05_6996';
import Comp_05_6997 from './Comp_05_6997';
import Comp_05_6998 from './Comp_05_6998';
import Comp_05_6999 from './Comp_05_6999';

const Comp_04_1399: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1399
      <div>
      <Comp_05_6995></Comp_05_6995>';
<Comp_05_6996></Comp_05_6996>';
<Comp_05_6997></Comp_05_6997>';
<Comp_05_6998></Comp_05_6998>';
<Comp_05_6999></Comp_05_6999>';
        </div>
      </div>;
};

export default Comp_04_1399;
