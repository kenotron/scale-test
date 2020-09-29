// Comp_04_1014
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5070 from './Comp_05_5070';
import Comp_05_5071 from './Comp_05_5071';
import Comp_05_5072 from './Comp_05_5072';
import Comp_05_5073 from './Comp_05_5073';
import Comp_05_5074 from './Comp_05_5074';

const Comp_04_1014: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1014
      <div>
      <Comp_05_5070></Comp_05_5070>';
<Comp_05_5071></Comp_05_5071>';
<Comp_05_5072></Comp_05_5072>';
<Comp_05_5073></Comp_05_5073>';
<Comp_05_5074></Comp_05_5074>';
        </div>
      </div>;
};

export default Comp_04_1014;
