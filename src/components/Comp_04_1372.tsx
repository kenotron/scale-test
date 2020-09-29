// Comp_04_1372
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6860 from './Comp_05_6860';
import Comp_05_6861 from './Comp_05_6861';
import Comp_05_6862 from './Comp_05_6862';
import Comp_05_6863 from './Comp_05_6863';
import Comp_05_6864 from './Comp_05_6864';

const Comp_04_1372: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1372
      <div>
      <Comp_05_6860></Comp_05_6860>';
<Comp_05_6861></Comp_05_6861>';
<Comp_05_6862></Comp_05_6862>';
<Comp_05_6863></Comp_05_6863>';
<Comp_05_6864></Comp_05_6864>';
        </div>
      </div>;
};

export default Comp_04_1372;
