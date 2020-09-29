// Comp_04_1038
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5190 from './Comp_05_5190';
import Comp_05_5191 from './Comp_05_5191';
import Comp_05_5192 from './Comp_05_5192';
import Comp_05_5193 from './Comp_05_5193';
import Comp_05_5194 from './Comp_05_5194';

const Comp_04_1038: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1038
      <div>
      <Comp_05_5190></Comp_05_5190>';
<Comp_05_5191></Comp_05_5191>';
<Comp_05_5192></Comp_05_5192>';
<Comp_05_5193></Comp_05_5193>';
<Comp_05_5194></Comp_05_5194>';
        </div>
      </div>;
};

export default Comp_04_1038;
