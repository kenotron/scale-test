// Comp_04_0825
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4125 from './Comp_05_4125';
import Comp_05_4126 from './Comp_05_4126';
import Comp_05_4127 from './Comp_05_4127';
import Comp_05_4128 from './Comp_05_4128';
import Comp_05_4129 from './Comp_05_4129';

const Comp_04_0825: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0825
      <div>
      <Comp_05_4125></Comp_05_4125>';
<Comp_05_4126></Comp_05_4126>';
<Comp_05_4127></Comp_05_4127>';
<Comp_05_4128></Comp_05_4128>';
<Comp_05_4129></Comp_05_4129>';
        </div>
      </div>;
};

export default Comp_04_0825;
