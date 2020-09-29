// Comp_04_1572
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7860 from './Comp_05_7860';
import Comp_05_7861 from './Comp_05_7861';
import Comp_05_7862 from './Comp_05_7862';
import Comp_05_7863 from './Comp_05_7863';
import Comp_05_7864 from './Comp_05_7864';

const Comp_04_1572: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1572
      <div>
      <Comp_05_7860></Comp_05_7860>';
<Comp_05_7861></Comp_05_7861>';
<Comp_05_7862></Comp_05_7862>';
<Comp_05_7863></Comp_05_7863>';
<Comp_05_7864></Comp_05_7864>';
        </div>
      </div>;
};

export default Comp_04_1572;
