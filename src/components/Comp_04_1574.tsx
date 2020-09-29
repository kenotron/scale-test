// Comp_04_1574
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7870 from './Comp_05_7870';
import Comp_05_7871 from './Comp_05_7871';
import Comp_05_7872 from './Comp_05_7872';
import Comp_05_7873 from './Comp_05_7873';
import Comp_05_7874 from './Comp_05_7874';

const Comp_04_1574: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1574
      <div>
      <Comp_05_7870></Comp_05_7870>';
<Comp_05_7871></Comp_05_7871>';
<Comp_05_7872></Comp_05_7872>';
<Comp_05_7873></Comp_05_7873>';
<Comp_05_7874></Comp_05_7874>';
        </div>
      </div>;
};

export default Comp_04_1574;
