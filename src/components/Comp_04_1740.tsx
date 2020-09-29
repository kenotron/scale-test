// Comp_04_1740
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8700 from './Comp_05_8700';
import Comp_05_8701 from './Comp_05_8701';
import Comp_05_8702 from './Comp_05_8702';
import Comp_05_8703 from './Comp_05_8703';
import Comp_05_8704 from './Comp_05_8704';

const Comp_04_1740: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1740
      <div>
      <Comp_05_8700></Comp_05_8700>';
<Comp_05_8701></Comp_05_8701>';
<Comp_05_8702></Comp_05_8702>';
<Comp_05_8703></Comp_05_8703>';
<Comp_05_8704></Comp_05_8704>';
        </div>
      </div>;
};

export default Comp_04_1740;
