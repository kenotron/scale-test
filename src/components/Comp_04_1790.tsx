// Comp_04_1790
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8950 from './Comp_05_8950';
import Comp_05_8951 from './Comp_05_8951';
import Comp_05_8952 from './Comp_05_8952';
import Comp_05_8953 from './Comp_05_8953';
import Comp_05_8954 from './Comp_05_8954';

const Comp_04_1790: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1790
      <div>
      <Comp_05_8950></Comp_05_8950>';
<Comp_05_8951></Comp_05_8951>';
<Comp_05_8952></Comp_05_8952>';
<Comp_05_8953></Comp_05_8953>';
<Comp_05_8954></Comp_05_8954>';
        </div>
      </div>;
};

export default Comp_04_1790;
