// Comp_04_1425
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7125 from './Comp_05_7125';
import Comp_05_7126 from './Comp_05_7126';
import Comp_05_7127 from './Comp_05_7127';
import Comp_05_7128 from './Comp_05_7128';
import Comp_05_7129 from './Comp_05_7129';

const Comp_04_1425: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1425
      <div>
      <Comp_05_7125></Comp_05_7125>';
<Comp_05_7126></Comp_05_7126>';
<Comp_05_7127></Comp_05_7127>';
<Comp_05_7128></Comp_05_7128>';
<Comp_05_7129></Comp_05_7129>';
        </div>
      </div>;
};

export default Comp_04_1425;
