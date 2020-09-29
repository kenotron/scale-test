// Comp_04_1194
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5970 from './Comp_05_5970';
import Comp_05_5971 from './Comp_05_5971';
import Comp_05_5972 from './Comp_05_5972';
import Comp_05_5973 from './Comp_05_5973';
import Comp_05_5974 from './Comp_05_5974';

const Comp_04_1194: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1194
      <div>
      <Comp_05_5970></Comp_05_5970>';
<Comp_05_5971></Comp_05_5971>';
<Comp_05_5972></Comp_05_5972>';
<Comp_05_5973></Comp_05_5973>';
<Comp_05_5974></Comp_05_5974>';
        </div>
      </div>;
};

export default Comp_04_1194;
