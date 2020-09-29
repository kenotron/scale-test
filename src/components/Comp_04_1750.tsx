// Comp_04_1750
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8750 from './Comp_05_8750';
import Comp_05_8751 from './Comp_05_8751';
import Comp_05_8752 from './Comp_05_8752';
import Comp_05_8753 from './Comp_05_8753';
import Comp_05_8754 from './Comp_05_8754';

const Comp_04_1750: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1750
      <div>
      <Comp_05_8750></Comp_05_8750>';
<Comp_05_8751></Comp_05_8751>';
<Comp_05_8752></Comp_05_8752>';
<Comp_05_8753></Comp_05_8753>';
<Comp_05_8754></Comp_05_8754>';
        </div>
      </div>;
};

export default Comp_04_1750;
