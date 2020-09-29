// Comp_04_1394
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6970 from './Comp_05_6970';
import Comp_05_6971 from './Comp_05_6971';
import Comp_05_6972 from './Comp_05_6972';
import Comp_05_6973 from './Comp_05_6973';
import Comp_05_6974 from './Comp_05_6974';

const Comp_04_1394: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1394
      <div>
      <Comp_05_6970></Comp_05_6970>';
<Comp_05_6971></Comp_05_6971>';
<Comp_05_6972></Comp_05_6972>';
<Comp_05_6973></Comp_05_6973>';
<Comp_05_6974></Comp_05_6974>';
        </div>
      </div>;
};

export default Comp_04_1394;
