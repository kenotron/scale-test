// Comp_03_0274
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_1370 from './Comp_04_1370';
import Comp_04_1371 from './Comp_04_1371';
import Comp_04_1372 from './Comp_04_1372';
import Comp_04_1373 from './Comp_04_1373';
import Comp_04_1374 from './Comp_04_1374';

const Comp_03_0274: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0274
      <div>
      <Comp_04_1370></Comp_04_1370>';
<Comp_04_1371></Comp_04_1371>';
<Comp_04_1372></Comp_04_1372>';
<Comp_04_1373></Comp_04_1373>';
<Comp_04_1374></Comp_04_1374>';
        </div>
      </div>;
};

export default Comp_03_0274;
