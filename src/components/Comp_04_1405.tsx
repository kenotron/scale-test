// Comp_04_1405
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7025 from './Comp_05_7025';
import Comp_05_7026 from './Comp_05_7026';
import Comp_05_7027 from './Comp_05_7027';
import Comp_05_7028 from './Comp_05_7028';
import Comp_05_7029 from './Comp_05_7029';

const Comp_04_1405: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1405
      <div>
      <Comp_05_7025></Comp_05_7025>';
<Comp_05_7026></Comp_05_7026>';
<Comp_05_7027></Comp_05_7027>';
<Comp_05_7028></Comp_05_7028>';
<Comp_05_7029></Comp_05_7029>';
        </div>
      </div>;
};

export default Comp_04_1405;
