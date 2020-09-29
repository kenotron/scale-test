// Comp_04_0795
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3975 from './Comp_05_3975';
import Comp_05_3976 from './Comp_05_3976';
import Comp_05_3977 from './Comp_05_3977';
import Comp_05_3978 from './Comp_05_3978';
import Comp_05_3979 from './Comp_05_3979';

const Comp_04_0795: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0795
      <div>
      <Comp_05_3975></Comp_05_3975>';
<Comp_05_3976></Comp_05_3976>';
<Comp_05_3977></Comp_05_3977>';
<Comp_05_3978></Comp_05_3978>';
<Comp_05_3979></Comp_05_3979>';
        </div>
      </div>;
};

export default Comp_04_0795;
