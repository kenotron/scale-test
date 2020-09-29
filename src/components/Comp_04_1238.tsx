// Comp_04_1238
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6190 from './Comp_05_6190';
import Comp_05_6191 from './Comp_05_6191';
import Comp_05_6192 from './Comp_05_6192';
import Comp_05_6193 from './Comp_05_6193';
import Comp_05_6194 from './Comp_05_6194';

const Comp_04_1238: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1238
      <div>
      <Comp_05_6190></Comp_05_6190>';
<Comp_05_6191></Comp_05_6191>';
<Comp_05_6192></Comp_05_6192>';
<Comp_05_6193></Comp_05_6193>';
<Comp_05_6194></Comp_05_6194>';
        </div>
      </div>;
};

export default Comp_04_1238;
