// Comp_04_0970
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4850 from './Comp_05_4850';
import Comp_05_4851 from './Comp_05_4851';
import Comp_05_4852 from './Comp_05_4852';
import Comp_05_4853 from './Comp_05_4853';
import Comp_05_4854 from './Comp_05_4854';

const Comp_04_0970: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0970
      <div>
      <Comp_05_4850></Comp_05_4850>';
<Comp_05_4851></Comp_05_4851>';
<Comp_05_4852></Comp_05_4852>';
<Comp_05_4853></Comp_05_4853>';
<Comp_05_4854></Comp_05_4854>';
        </div>
      </div>;
};

export default Comp_04_0970;
