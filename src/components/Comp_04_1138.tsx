// Comp_04_1138
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5690 from './Comp_05_5690';
import Comp_05_5691 from './Comp_05_5691';
import Comp_05_5692 from './Comp_05_5692';
import Comp_05_5693 from './Comp_05_5693';
import Comp_05_5694 from './Comp_05_5694';

const Comp_04_1138: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1138
      <div>
      <Comp_05_5690></Comp_05_5690>';
<Comp_05_5691></Comp_05_5691>';
<Comp_05_5692></Comp_05_5692>';
<Comp_05_5693></Comp_05_5693>';
<Comp_05_5694></Comp_05_5694>';
        </div>
      </div>;
};

export default Comp_04_1138;
