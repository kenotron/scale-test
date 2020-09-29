// Comp_04_1274
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6370 from './Comp_05_6370';
import Comp_05_6371 from './Comp_05_6371';
import Comp_05_6372 from './Comp_05_6372';
import Comp_05_6373 from './Comp_05_6373';
import Comp_05_6374 from './Comp_05_6374';

const Comp_04_1274: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1274
      <div>
      <Comp_05_6370></Comp_05_6370>';
<Comp_05_6371></Comp_05_6371>';
<Comp_05_6372></Comp_05_6372>';
<Comp_05_6373></Comp_05_6373>';
<Comp_05_6374></Comp_05_6374>';
        </div>
      </div>;
};

export default Comp_04_1274;
