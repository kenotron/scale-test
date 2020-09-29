// Comp_04_0997
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4985 from './Comp_05_4985';
import Comp_05_4986 from './Comp_05_4986';
import Comp_05_4987 from './Comp_05_4987';
import Comp_05_4988 from './Comp_05_4988';
import Comp_05_4989 from './Comp_05_4989';

const Comp_04_0997: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0997
      <div>
      <Comp_05_4985></Comp_05_4985>';
<Comp_05_4986></Comp_05_4986>';
<Comp_05_4987></Comp_05_4987>';
<Comp_05_4988></Comp_05_4988>';
<Comp_05_4989></Comp_05_4989>';
        </div>
      </div>;
};

export default Comp_04_0997;
