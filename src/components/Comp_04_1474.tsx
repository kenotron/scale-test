// Comp_04_1474
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7370 from './Comp_05_7370';
import Comp_05_7371 from './Comp_05_7371';
import Comp_05_7372 from './Comp_05_7372';
import Comp_05_7373 from './Comp_05_7373';
import Comp_05_7374 from './Comp_05_7374';

const Comp_04_1474: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1474
      <div>
      <Comp_05_7370></Comp_05_7370>';
<Comp_05_7371></Comp_05_7371>';
<Comp_05_7372></Comp_05_7372>';
<Comp_05_7373></Comp_05_7373>';
<Comp_05_7374></Comp_05_7374>';
        </div>
      </div>;
};

export default Comp_04_1474;
