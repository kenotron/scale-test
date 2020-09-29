// Comp_04_0956
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4780 from './Comp_05_4780';
import Comp_05_4781 from './Comp_05_4781';
import Comp_05_4782 from './Comp_05_4782';
import Comp_05_4783 from './Comp_05_4783';
import Comp_05_4784 from './Comp_05_4784';

const Comp_04_0956: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0956
      <div>
      <Comp_05_4780></Comp_05_4780>';
<Comp_05_4781></Comp_05_4781>';
<Comp_05_4782></Comp_05_4782>';
<Comp_05_4783></Comp_05_4783>';
<Comp_05_4784></Comp_05_4784>';
        </div>
      </div>;
};

export default Comp_04_0956;
