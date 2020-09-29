// Comp_04_1190
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5950 from './Comp_05_5950';
import Comp_05_5951 from './Comp_05_5951';
import Comp_05_5952 from './Comp_05_5952';
import Comp_05_5953 from './Comp_05_5953';
import Comp_05_5954 from './Comp_05_5954';

const Comp_04_1190: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1190
      <div>
      <Comp_05_5950></Comp_05_5950>';
<Comp_05_5951></Comp_05_5951>';
<Comp_05_5952></Comp_05_5952>';
<Comp_05_5953></Comp_05_5953>';
<Comp_05_5954></Comp_05_5954>';
        </div>
      </div>;
};

export default Comp_04_1190;
