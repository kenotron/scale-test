// Comp_04_1028
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5140 from './Comp_05_5140';
import Comp_05_5141 from './Comp_05_5141';
import Comp_05_5142 from './Comp_05_5142';
import Comp_05_5143 from './Comp_05_5143';
import Comp_05_5144 from './Comp_05_5144';

const Comp_04_1028: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1028
      <div>
      <Comp_05_5140></Comp_05_5140>';
<Comp_05_5141></Comp_05_5141>';
<Comp_05_5142></Comp_05_5142>';
<Comp_05_5143></Comp_05_5143>';
<Comp_05_5144></Comp_05_5144>';
        </div>
      </div>;
};

export default Comp_04_1028;
