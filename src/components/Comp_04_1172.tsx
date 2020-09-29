// Comp_04_1172
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5860 from './Comp_05_5860';
import Comp_05_5861 from './Comp_05_5861';
import Comp_05_5862 from './Comp_05_5862';
import Comp_05_5863 from './Comp_05_5863';
import Comp_05_5864 from './Comp_05_5864';

const Comp_04_1172: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1172
      <div>
      <Comp_05_5860></Comp_05_5860>';
<Comp_05_5861></Comp_05_5861>';
<Comp_05_5862></Comp_05_5862>';
<Comp_05_5863></Comp_05_5863>';
<Comp_05_5864></Comp_05_5864>';
        </div>
      </div>;
};

export default Comp_04_1172;
