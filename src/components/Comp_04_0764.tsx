// Comp_04_0764
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3820 from './Comp_05_3820';
import Comp_05_3821 from './Comp_05_3821';
import Comp_05_3822 from './Comp_05_3822';
import Comp_05_3823 from './Comp_05_3823';
import Comp_05_3824 from './Comp_05_3824';

const Comp_04_0764: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0764
      <div>
      <Comp_05_3820></Comp_05_3820>';
<Comp_05_3821></Comp_05_3821>';
<Comp_05_3822></Comp_05_3822>';
<Comp_05_3823></Comp_05_3823>';
<Comp_05_3824></Comp_05_3824>';
        </div>
      </div>;
};

export default Comp_04_0764;
