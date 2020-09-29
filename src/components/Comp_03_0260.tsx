// Comp_03_0260
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_1300 from './Comp_04_1300';
import Comp_04_1301 from './Comp_04_1301';
import Comp_04_1302 from './Comp_04_1302';
import Comp_04_1303 from './Comp_04_1303';
import Comp_04_1304 from './Comp_04_1304';

const Comp_03_0260: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0260
      <div>
      <Comp_04_1300></Comp_04_1300>';
<Comp_04_1301></Comp_04_1301>';
<Comp_04_1302></Comp_04_1302>';
<Comp_04_1303></Comp_04_1303>';
<Comp_04_1304></Comp_04_1304>';
        </div>
      </div>;
};

export default Comp_03_0260;
