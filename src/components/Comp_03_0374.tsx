// Comp_03_0374
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_1870 from './Comp_04_1870';
import Comp_04_1871 from './Comp_04_1871';
import Comp_04_1872 from './Comp_04_1872';
import Comp_04_1873 from './Comp_04_1873';
import Comp_04_1874 from './Comp_04_1874';

const Comp_03_0374: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0374
      <div>
      <Comp_04_1870></Comp_04_1870>';
<Comp_04_1871></Comp_04_1871>';
<Comp_04_1872></Comp_04_1872>';
<Comp_04_1873></Comp_04_1873>';
<Comp_04_1874></Comp_04_1874>';
        </div>
      </div>;
};

export default Comp_03_0374;
