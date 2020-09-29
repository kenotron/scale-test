// Comp_04_0959
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4795 from './Comp_05_4795';
import Comp_05_4796 from './Comp_05_4796';
import Comp_05_4797 from './Comp_05_4797';
import Comp_05_4798 from './Comp_05_4798';
import Comp_05_4799 from './Comp_05_4799';

const Comp_04_0959: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0959
      <div>
      <Comp_05_4795></Comp_05_4795>';
<Comp_05_4796></Comp_05_4796>';
<Comp_05_4797></Comp_05_4797>';
<Comp_05_4798></Comp_05_4798>';
<Comp_05_4799></Comp_05_4799>';
        </div>
      </div>;
};

export default Comp_04_0959;
