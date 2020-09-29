// Comp_04_1460
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7300 from './Comp_05_7300';
import Comp_05_7301 from './Comp_05_7301';
import Comp_05_7302 from './Comp_05_7302';
import Comp_05_7303 from './Comp_05_7303';
import Comp_05_7304 from './Comp_05_7304';

const Comp_04_1460: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1460
      <div>
      <Comp_05_7300></Comp_05_7300>';
<Comp_05_7301></Comp_05_7301>';
<Comp_05_7302></Comp_05_7302>';
<Comp_05_7303></Comp_05_7303>';
<Comp_05_7304></Comp_05_7304>';
        </div>
      </div>;
};

export default Comp_04_1460;
