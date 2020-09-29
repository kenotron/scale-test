// Comp_04_1874
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_9370 from './Comp_05_9370';
import Comp_05_9371 from './Comp_05_9371';
import Comp_05_9372 from './Comp_05_9372';
import Comp_05_9373 from './Comp_05_9373';
import Comp_05_9374 from './Comp_05_9374';

const Comp_04_1874: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1874
      <div>
      <Comp_05_9370></Comp_05_9370>';
<Comp_05_9371></Comp_05_9371>';
<Comp_05_9372></Comp_05_9372>';
<Comp_05_9373></Comp_05_9373>';
<Comp_05_9374></Comp_05_9374>';
        </div>
      </div>;
};

export default Comp_04_1874;
