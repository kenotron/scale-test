// Comp_03_0208
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_1040 from './Comp_04_1040';
import Comp_04_1041 from './Comp_04_1041';
import Comp_04_1042 from './Comp_04_1042';
import Comp_04_1043 from './Comp_04_1043';
import Comp_04_1044 from './Comp_04_1044';

const Comp_03_0208: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0208
      <div>
      <Comp_04_1040></Comp_04_1040>';
<Comp_04_1041></Comp_04_1041>';
<Comp_04_1042></Comp_04_1042>';
<Comp_04_1043></Comp_04_1043>';
<Comp_04_1044></Comp_04_1044>';
        </div>
      </div>;
};

export default Comp_03_0208;
