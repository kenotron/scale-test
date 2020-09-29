// Comp_04_0838
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4190 from './Comp_05_4190';
import Comp_05_4191 from './Comp_05_4191';
import Comp_05_4192 from './Comp_05_4192';
import Comp_05_4193 from './Comp_05_4193';
import Comp_05_4194 from './Comp_05_4194';

const Comp_04_0838: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0838
      <div>
      <Comp_05_4190></Comp_05_4190>';
<Comp_05_4191></Comp_05_4191>';
<Comp_05_4192></Comp_05_4192>';
<Comp_05_4193></Comp_05_4193>';
<Comp_05_4194></Comp_05_4194>';
        </div>
      </div>;
};

export default Comp_04_0838;
