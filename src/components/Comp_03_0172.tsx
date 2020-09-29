// Comp_03_0172
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0860 from './Comp_04_0860';
import Comp_04_0861 from './Comp_04_0861';
import Comp_04_0862 from './Comp_04_0862';
import Comp_04_0863 from './Comp_04_0863';
import Comp_04_0864 from './Comp_04_0864';

const Comp_03_0172: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0172
      <div>
      <Comp_04_0860></Comp_04_0860>';
<Comp_04_0861></Comp_04_0861>';
<Comp_04_0862></Comp_04_0862>';
<Comp_04_0863></Comp_04_0863>';
<Comp_04_0864></Comp_04_0864>';
        </div>
      </div>;
};

export default Comp_03_0172;
