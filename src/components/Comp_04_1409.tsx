// Comp_04_1409
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7045 from './Comp_05_7045';
import Comp_05_7046 from './Comp_05_7046';
import Comp_05_7047 from './Comp_05_7047';
import Comp_05_7048 from './Comp_05_7048';
import Comp_05_7049 from './Comp_05_7049';

const Comp_04_1409: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1409
      <div>
      <Comp_05_7045></Comp_05_7045>';
<Comp_05_7046></Comp_05_7046>';
<Comp_05_7047></Comp_05_7047>';
<Comp_05_7048></Comp_05_7048>';
<Comp_05_7049></Comp_05_7049>';
        </div>
      </div>;
};

export default Comp_04_1409;
