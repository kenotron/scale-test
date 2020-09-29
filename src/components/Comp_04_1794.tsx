// Comp_04_1794
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8970 from './Comp_05_8970';
import Comp_05_8971 from './Comp_05_8971';
import Comp_05_8972 from './Comp_05_8972';
import Comp_05_8973 from './Comp_05_8973';
import Comp_05_8974 from './Comp_05_8974';

const Comp_04_1794: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1794
      <div>
      <Comp_05_8970></Comp_05_8970>';
<Comp_05_8971></Comp_05_8971>';
<Comp_05_8972></Comp_05_8972>';
<Comp_05_8973></Comp_05_8973>';
<Comp_05_8974></Comp_05_8974>';
        </div>
      </div>;
};

export default Comp_04_1794;
