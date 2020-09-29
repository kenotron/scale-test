// Comp_04_1397
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6985 from './Comp_05_6985';
import Comp_05_6986 from './Comp_05_6986';
import Comp_05_6987 from './Comp_05_6987';
import Comp_05_6988 from './Comp_05_6988';
import Comp_05_6989 from './Comp_05_6989';

const Comp_04_1397: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1397
      <div>
      <Comp_05_6985></Comp_05_6985>';
<Comp_05_6986></Comp_05_6986>';
<Comp_05_6987></Comp_05_6987>';
<Comp_05_6988></Comp_05_6988>';
<Comp_05_6989></Comp_05_6989>';
        </div>
      </div>;
};

export default Comp_04_1397;
