// Comp_04_1375
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6875 from './Comp_05_6875';
import Comp_05_6876 from './Comp_05_6876';
import Comp_05_6877 from './Comp_05_6877';
import Comp_05_6878 from './Comp_05_6878';
import Comp_05_6879 from './Comp_05_6879';

const Comp_04_1375: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1375
      <div>
      <Comp_05_6875></Comp_05_6875>';
<Comp_05_6876></Comp_05_6876>';
<Comp_05_6877></Comp_05_6877>';
<Comp_05_6878></Comp_05_6878>';
<Comp_05_6879></Comp_05_6879>';
        </div>
      </div>;
};

export default Comp_04_1375;
