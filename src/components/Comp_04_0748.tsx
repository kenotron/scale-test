// Comp_04_0748
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3740 from './Comp_05_3740';
import Comp_05_3741 from './Comp_05_3741';
import Comp_05_3742 from './Comp_05_3742';
import Comp_05_3743 from './Comp_05_3743';
import Comp_05_3744 from './Comp_05_3744';

const Comp_04_0748: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0748
      <div>
      <Comp_05_3740></Comp_05_3740>';
<Comp_05_3741></Comp_05_3741>';
<Comp_05_3742></Comp_05_3742>';
<Comp_05_3743></Comp_05_3743>';
<Comp_05_3744></Comp_05_3744>';
        </div>
      </div>;
};

export default Comp_04_0748;
