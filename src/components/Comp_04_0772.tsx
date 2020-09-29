// Comp_04_0772
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3860 from './Comp_05_3860';
import Comp_05_3861 from './Comp_05_3861';
import Comp_05_3862 from './Comp_05_3862';
import Comp_05_3863 from './Comp_05_3863';
import Comp_05_3864 from './Comp_05_3864';

const Comp_04_0772: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0772
      <div>
      <Comp_05_3860></Comp_05_3860>';
<Comp_05_3861></Comp_05_3861>';
<Comp_05_3862></Comp_05_3862>';
<Comp_05_3863></Comp_05_3863>';
<Comp_05_3864></Comp_05_3864>';
        </div>
      </div>;
};

export default Comp_04_0772;
