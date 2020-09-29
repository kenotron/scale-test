// Comp_04_1025
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5125 from './Comp_05_5125';
import Comp_05_5126 from './Comp_05_5126';
import Comp_05_5127 from './Comp_05_5127';
import Comp_05_5128 from './Comp_05_5128';
import Comp_05_5129 from './Comp_05_5129';

const Comp_04_1025: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1025
      <div>
      <Comp_05_5125></Comp_05_5125>';
<Comp_05_5126></Comp_05_5126>';
<Comp_05_5127></Comp_05_5127>';
<Comp_05_5128></Comp_05_5128>';
<Comp_05_5129></Comp_05_5129>';
        </div>
      </div>;
};

export default Comp_04_1025;
