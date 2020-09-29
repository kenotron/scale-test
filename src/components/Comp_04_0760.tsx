// Comp_04_0760
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3800 from './Comp_05_3800';
import Comp_05_3801 from './Comp_05_3801';
import Comp_05_3802 from './Comp_05_3802';
import Comp_05_3803 from './Comp_05_3803';
import Comp_05_3804 from './Comp_05_3804';

const Comp_04_0760: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0760
      <div>
      <Comp_05_3800></Comp_05_3800>';
<Comp_05_3801></Comp_05_3801>';
<Comp_05_3802></Comp_05_3802>';
<Comp_05_3803></Comp_05_3803>';
<Comp_05_3804></Comp_05_3804>';
        </div>
      </div>;
};

export default Comp_04_0760;
