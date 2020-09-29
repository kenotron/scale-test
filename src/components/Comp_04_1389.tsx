// Comp_04_1389
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6945 from './Comp_05_6945';
import Comp_05_6946 from './Comp_05_6946';
import Comp_05_6947 from './Comp_05_6947';
import Comp_05_6948 from './Comp_05_6948';
import Comp_05_6949 from './Comp_05_6949';

const Comp_04_1389: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1389
      <div>
      <Comp_05_6945></Comp_05_6945>';
<Comp_05_6946></Comp_05_6946>';
<Comp_05_6947></Comp_05_6947>';
<Comp_05_6948></Comp_05_6948>';
<Comp_05_6949></Comp_05_6949>';
        </div>
      </div>;
};

export default Comp_04_1389;
