// Comp_04_1772
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8860 from './Comp_05_8860';
import Comp_05_8861 from './Comp_05_8861';
import Comp_05_8862 from './Comp_05_8862';
import Comp_05_8863 from './Comp_05_8863';
import Comp_05_8864 from './Comp_05_8864';

const Comp_04_1772: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1772
      <div>
      <Comp_05_8860></Comp_05_8860>';
<Comp_05_8861></Comp_05_8861>';
<Comp_05_8862></Comp_05_8862>';
<Comp_05_8863></Comp_05_8863>';
<Comp_05_8864></Comp_05_8864>';
        </div>
      </div>;
};

export default Comp_04_1772;
