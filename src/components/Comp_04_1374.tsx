// Comp_04_1374
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6870 from './Comp_05_6870';
import Comp_05_6871 from './Comp_05_6871';
import Comp_05_6872 from './Comp_05_6872';
import Comp_05_6873 from './Comp_05_6873';
import Comp_05_6874 from './Comp_05_6874';

const Comp_04_1374: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1374
      <div>
      <Comp_05_6870></Comp_05_6870>';
<Comp_05_6871></Comp_05_6871>';
<Comp_05_6872></Comp_05_6872>';
<Comp_05_6873></Comp_05_6873>';
<Comp_05_6874></Comp_05_6874>';
        </div>
      </div>;
};

export default Comp_04_1374;
