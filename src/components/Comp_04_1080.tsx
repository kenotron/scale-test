// Comp_04_1080
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5400 from './Comp_05_5400';
import Comp_05_5401 from './Comp_05_5401';
import Comp_05_5402 from './Comp_05_5402';
import Comp_05_5403 from './Comp_05_5403';
import Comp_05_5404 from './Comp_05_5404';

const Comp_04_1080: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1080
      <div>
      <Comp_05_5400></Comp_05_5400>';
<Comp_05_5401></Comp_05_5401>';
<Comp_05_5402></Comp_05_5402>';
<Comp_05_5403></Comp_05_5403>';
<Comp_05_5404></Comp_05_5404>';
        </div>
      </div>;
};

export default Comp_04_1080;
