// Comp_04_1307
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6535 from './Comp_05_6535';
import Comp_05_6536 from './Comp_05_6536';
import Comp_05_6537 from './Comp_05_6537';
import Comp_05_6538 from './Comp_05_6538';
import Comp_05_6539 from './Comp_05_6539';

const Comp_04_1307: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1307
      <div>
      <Comp_05_6535></Comp_05_6535>';
<Comp_05_6536></Comp_05_6536>';
<Comp_05_6537></Comp_05_6537>';
<Comp_05_6538></Comp_05_6538>';
<Comp_05_6539></Comp_05_6539>';
        </div>
      </div>;
};

export default Comp_04_1307;
