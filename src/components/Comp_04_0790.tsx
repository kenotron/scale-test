// Comp_04_0790
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3950 from './Comp_05_3950';
import Comp_05_3951 from './Comp_05_3951';
import Comp_05_3952 from './Comp_05_3952';
import Comp_05_3953 from './Comp_05_3953';
import Comp_05_3954 from './Comp_05_3954';

const Comp_04_0790: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0790
      <div>
      <Comp_05_3950></Comp_05_3950>';
<Comp_05_3951></Comp_05_3951>';
<Comp_05_3952></Comp_05_3952>';
<Comp_05_3953></Comp_05_3953>';
<Comp_05_3954></Comp_05_3954>';
        </div>
      </div>;
};

export default Comp_04_0790;
