// Comp_04_1306
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6530 from './Comp_05_6530';
import Comp_05_6531 from './Comp_05_6531';
import Comp_05_6532 from './Comp_05_6532';
import Comp_05_6533 from './Comp_05_6533';
import Comp_05_6534 from './Comp_05_6534';

const Comp_04_1306: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1306
      <div>
      <Comp_05_6530></Comp_05_6530>';
<Comp_05_6531></Comp_05_6531>';
<Comp_05_6532></Comp_05_6532>';
<Comp_05_6533></Comp_05_6533>';
<Comp_05_6534></Comp_05_6534>';
        </div>
      </div>;
};

export default Comp_04_1306;
