// Comp_03_0372
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_1860 from './Comp_04_1860';
import Comp_04_1861 from './Comp_04_1861';
import Comp_04_1862 from './Comp_04_1862';
import Comp_04_1863 from './Comp_04_1863';
import Comp_04_1864 from './Comp_04_1864';

const Comp_03_0372: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0372
      <div>
      <Comp_04_1860></Comp_04_1860>';
<Comp_04_1861></Comp_04_1861>';
<Comp_04_1862></Comp_04_1862>';
<Comp_04_1863></Comp_04_1863>';
<Comp_04_1864></Comp_04_1864>';
        </div>
      </div>;
};

export default Comp_03_0372;
