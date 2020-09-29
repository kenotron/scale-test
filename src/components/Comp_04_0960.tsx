// Comp_04_0960
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4800 from './Comp_05_4800';
import Comp_05_4801 from './Comp_05_4801';
import Comp_05_4802 from './Comp_05_4802';
import Comp_05_4803 from './Comp_05_4803';
import Comp_05_4804 from './Comp_05_4804';

const Comp_04_0960: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0960
      <div>
      <Comp_05_4800></Comp_05_4800>';
<Comp_05_4801></Comp_05_4801>';
<Comp_05_4802></Comp_05_4802>';
<Comp_05_4803></Comp_05_4803>';
<Comp_05_4804></Comp_05_4804>';
        </div>
      </div>;
};

export default Comp_04_0960;
