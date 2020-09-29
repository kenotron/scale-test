// Comp_04_1252
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6260 from './Comp_05_6260';
import Comp_05_6261 from './Comp_05_6261';
import Comp_05_6262 from './Comp_05_6262';
import Comp_05_6263 from './Comp_05_6263';
import Comp_05_6264 from './Comp_05_6264';

const Comp_04_1252: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1252
      <div>
      <Comp_05_6260></Comp_05_6260>';
<Comp_05_6261></Comp_05_6261>';
<Comp_05_6262></Comp_05_6262>';
<Comp_05_6263></Comp_05_6263>';
<Comp_05_6264></Comp_05_6264>';
        </div>
      </div>;
};

export default Comp_04_1252;
