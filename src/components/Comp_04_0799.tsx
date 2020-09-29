// Comp_04_0799
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3995 from './Comp_05_3995';
import Comp_05_3996 from './Comp_05_3996';
import Comp_05_3997 from './Comp_05_3997';
import Comp_05_3998 from './Comp_05_3998';
import Comp_05_3999 from './Comp_05_3999';

const Comp_04_0799: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0799
      <div>
      <Comp_05_3995></Comp_05_3995>';
<Comp_05_3996></Comp_05_3996>';
<Comp_05_3997></Comp_05_3997>';
<Comp_05_3998></Comp_05_3998>';
<Comp_05_3999></Comp_05_3999>';
        </div>
      </div>;
};

export default Comp_04_0799;
