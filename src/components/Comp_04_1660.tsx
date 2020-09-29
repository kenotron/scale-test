// Comp_04_1660
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8300 from './Comp_05_8300';
import Comp_05_8301 from './Comp_05_8301';
import Comp_05_8302 from './Comp_05_8302';
import Comp_05_8303 from './Comp_05_8303';
import Comp_05_8304 from './Comp_05_8304';

const Comp_04_1660: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1660
      <div>
      <Comp_05_8300></Comp_05_8300>';
<Comp_05_8301></Comp_05_8301>';
<Comp_05_8302></Comp_05_8302>';
<Comp_05_8303></Comp_05_8303>';
<Comp_05_8304></Comp_05_8304>';
        </div>
      </div>;
};

export default Comp_04_1660;
