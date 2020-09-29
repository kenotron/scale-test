// Comp_04_1652
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8260 from './Comp_05_8260';
import Comp_05_8261 from './Comp_05_8261';
import Comp_05_8262 from './Comp_05_8262';
import Comp_05_8263 from './Comp_05_8263';
import Comp_05_8264 from './Comp_05_8264';

const Comp_04_1652: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1652
      <div>
      <Comp_05_8260></Comp_05_8260>';
<Comp_05_8261></Comp_05_8261>';
<Comp_05_8262></Comp_05_8262>';
<Comp_05_8263></Comp_05_8263>';
<Comp_05_8264></Comp_05_8264>';
        </div>
      </div>;
};

export default Comp_04_1652;
