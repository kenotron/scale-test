// Comp_04_1797
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8985 from './Comp_05_8985';
import Comp_05_8986 from './Comp_05_8986';
import Comp_05_8987 from './Comp_05_8987';
import Comp_05_8988 from './Comp_05_8988';
import Comp_05_8989 from './Comp_05_8989';

const Comp_04_1797: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1797
      <div>
      <Comp_05_8985></Comp_05_8985>';
<Comp_05_8986></Comp_05_8986>';
<Comp_05_8987></Comp_05_8987>';
<Comp_05_8988></Comp_05_8988>';
<Comp_05_8989></Comp_05_8989>';
        </div>
      </div>;
};

export default Comp_04_1797;
