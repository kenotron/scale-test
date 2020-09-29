// Comp_04_0797
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3985 from './Comp_05_3985';
import Comp_05_3986 from './Comp_05_3986';
import Comp_05_3987 from './Comp_05_3987';
import Comp_05_3988 from './Comp_05_3988';
import Comp_05_3989 from './Comp_05_3989';

const Comp_04_0797: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0797
      <div>
      <Comp_05_3985></Comp_05_3985>';
<Comp_05_3986></Comp_05_3986>';
<Comp_05_3987></Comp_05_3987>';
<Comp_05_3988></Comp_05_3988>';
<Comp_05_3989></Comp_05_3989>';
        </div>
      </div>;
};

export default Comp_04_0797;
