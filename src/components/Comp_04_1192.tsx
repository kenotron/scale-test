// Comp_04_1192
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5960 from './Comp_05_5960';
import Comp_05_5961 from './Comp_05_5961';
import Comp_05_5962 from './Comp_05_5962';
import Comp_05_5963 from './Comp_05_5963';
import Comp_05_5964 from './Comp_05_5964';

const Comp_04_1192: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1192
      <div>
      <Comp_05_5960></Comp_05_5960>';
<Comp_05_5961></Comp_05_5961>';
<Comp_05_5962></Comp_05_5962>';
<Comp_05_5963></Comp_05_5963>';
<Comp_05_5964></Comp_05_5964>';
        </div>
      </div>;
};

export default Comp_04_1192;
