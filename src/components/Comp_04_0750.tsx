// Comp_04_0750
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3750 from './Comp_05_3750';
import Comp_05_3751 from './Comp_05_3751';
import Comp_05_3752 from './Comp_05_3752';
import Comp_05_3753 from './Comp_05_3753';
import Comp_05_3754 from './Comp_05_3754';

const Comp_04_0750: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0750
      <div>
      <Comp_05_3750></Comp_05_3750>';
<Comp_05_3751></Comp_05_3751>';
<Comp_05_3752></Comp_05_3752>';
<Comp_05_3753></Comp_05_3753>';
<Comp_05_3754></Comp_05_3754>';
        </div>
      </div>;
};

export default Comp_04_0750;
