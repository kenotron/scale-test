// Comp_04_1197
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5985 from './Comp_05_5985';
import Comp_05_5986 from './Comp_05_5986';
import Comp_05_5987 from './Comp_05_5987';
import Comp_05_5988 from './Comp_05_5988';
import Comp_05_5989 from './Comp_05_5989';

const Comp_04_1197: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1197
      <div>
      <Comp_05_5985></Comp_05_5985>';
<Comp_05_5986></Comp_05_5986>';
<Comp_05_5987></Comp_05_5987>';
<Comp_05_5988></Comp_05_5988>';
<Comp_05_5989></Comp_05_5989>';
        </div>
      </div>;
};

export default Comp_04_1197;
