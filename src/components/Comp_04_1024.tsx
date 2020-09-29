// Comp_04_1024
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5120 from './Comp_05_5120';
import Comp_05_5121 from './Comp_05_5121';
import Comp_05_5122 from './Comp_05_5122';
import Comp_05_5123 from './Comp_05_5123';
import Comp_05_5124 from './Comp_05_5124';

const Comp_04_1024: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1024
      <div>
      <Comp_05_5120></Comp_05_5120>';
<Comp_05_5121></Comp_05_5121>';
<Comp_05_5122></Comp_05_5122>';
<Comp_05_5123></Comp_05_5123>';
<Comp_05_5124></Comp_05_5124>';
        </div>
      </div>;
};

export default Comp_04_1024;
