// Comp_04_1860
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_9300 from './Comp_05_9300';
import Comp_05_9301 from './Comp_05_9301';
import Comp_05_9302 from './Comp_05_9302';
import Comp_05_9303 from './Comp_05_9303';
import Comp_05_9304 from './Comp_05_9304';

const Comp_04_1860: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1860
      <div>
      <Comp_05_9300></Comp_05_9300>';
<Comp_05_9301></Comp_05_9301>';
<Comp_05_9302></Comp_05_9302>';
<Comp_05_9303></Comp_05_9303>';
<Comp_05_9304></Comp_05_9304>';
        </div>
      </div>;
};

export default Comp_04_1860;
