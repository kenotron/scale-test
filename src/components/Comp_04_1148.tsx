// Comp_04_1148
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5740 from './Comp_05_5740';
import Comp_05_5741 from './Comp_05_5741';
import Comp_05_5742 from './Comp_05_5742';
import Comp_05_5743 from './Comp_05_5743';
import Comp_05_5744 from './Comp_05_5744';

const Comp_04_1148: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1148
      <div>
      <Comp_05_5740></Comp_05_5740>';
<Comp_05_5741></Comp_05_5741>';
<Comp_05_5742></Comp_05_5742>';
<Comp_05_5743></Comp_05_5743>';
<Comp_05_5744></Comp_05_5744>';
        </div>
      </div>;
};

export default Comp_04_1148;
