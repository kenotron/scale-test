// Comp_04_0786
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3930 from './Comp_05_3930';
import Comp_05_3931 from './Comp_05_3931';
import Comp_05_3932 from './Comp_05_3932';
import Comp_05_3933 from './Comp_05_3933';
import Comp_05_3934 from './Comp_05_3934';

const Comp_04_0786: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0786
      <div>
      <Comp_05_3930></Comp_05_3930>';
<Comp_05_3931></Comp_05_3931>';
<Comp_05_3932></Comp_05_3932>';
<Comp_05_3933></Comp_05_3933>';
<Comp_05_3934></Comp_05_3934>';
        </div>
      </div>;
};

export default Comp_04_0786;
