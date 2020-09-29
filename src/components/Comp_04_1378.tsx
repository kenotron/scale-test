// Comp_04_1378
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6890 from './Comp_05_6890';
import Comp_05_6891 from './Comp_05_6891';
import Comp_05_6892 from './Comp_05_6892';
import Comp_05_6893 from './Comp_05_6893';
import Comp_05_6894 from './Comp_05_6894';

const Comp_04_1378: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1378
      <div>
      <Comp_05_6890></Comp_05_6890>';
<Comp_05_6891></Comp_05_6891>';
<Comp_05_6892></Comp_05_6892>';
<Comp_05_6893></Comp_05_6893>';
<Comp_05_6894></Comp_05_6894>';
        </div>
      </div>;
};

export default Comp_04_1378;
