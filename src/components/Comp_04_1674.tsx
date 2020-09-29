// Comp_04_1674
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8370 from './Comp_05_8370';
import Comp_05_8371 from './Comp_05_8371';
import Comp_05_8372 from './Comp_05_8372';
import Comp_05_8373 from './Comp_05_8373';
import Comp_05_8374 from './Comp_05_8374';

const Comp_04_1674: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1674
      <div>
      <Comp_05_8370></Comp_05_8370>';
<Comp_05_8371></Comp_05_8371>';
<Comp_05_8372></Comp_05_8372>';
<Comp_05_8373></Comp_05_8373>';
<Comp_05_8374></Comp_05_8374>';
        </div>
      </div>;
};

export default Comp_04_1674;
