// Comp_04_1760
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8800 from './Comp_05_8800';
import Comp_05_8801 from './Comp_05_8801';
import Comp_05_8802 from './Comp_05_8802';
import Comp_05_8803 from './Comp_05_8803';
import Comp_05_8804 from './Comp_05_8804';

const Comp_04_1760: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1760
      <div>
      <Comp_05_8800></Comp_05_8800>';
<Comp_05_8801></Comp_05_8801>';
<Comp_05_8802></Comp_05_8802>';
<Comp_05_8803></Comp_05_8803>';
<Comp_05_8804></Comp_05_8804>';
        </div>
      </div>;
};

export default Comp_04_1760;
