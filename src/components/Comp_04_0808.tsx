// Comp_04_0808
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4040 from './Comp_05_4040';
import Comp_05_4041 from './Comp_05_4041';
import Comp_05_4042 from './Comp_05_4042';
import Comp_05_4043 from './Comp_05_4043';
import Comp_05_4044 from './Comp_05_4044';

const Comp_04_0808: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0808
      <div>
      <Comp_05_4040></Comp_05_4040>';
<Comp_05_4041></Comp_05_4041>';
<Comp_05_4042></Comp_05_4042>';
<Comp_05_4043></Comp_05_4043>';
<Comp_05_4044></Comp_05_4044>';
        </div>
      </div>;
};

export default Comp_04_0808;
