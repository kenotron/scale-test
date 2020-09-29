// Comp_04_1748
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8740 from './Comp_05_8740';
import Comp_05_8741 from './Comp_05_8741';
import Comp_05_8742 from './Comp_05_8742';
import Comp_05_8743 from './Comp_05_8743';
import Comp_05_8744 from './Comp_05_8744';

const Comp_04_1748: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1748
      <div>
      <Comp_05_8740></Comp_05_8740>';
<Comp_05_8741></Comp_05_8741>';
<Comp_05_8742></Comp_05_8742>';
<Comp_05_8743></Comp_05_8743>';
<Comp_05_8744></Comp_05_8744>';
        </div>
      </div>;
};

export default Comp_04_1748;
