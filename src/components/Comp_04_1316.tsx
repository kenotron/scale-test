// Comp_04_1316
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6580 from './Comp_05_6580';
import Comp_05_6581 from './Comp_05_6581';
import Comp_05_6582 from './Comp_05_6582';
import Comp_05_6583 from './Comp_05_6583';
import Comp_05_6584 from './Comp_05_6584';

const Comp_04_1316: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1316
      <div>
      <Comp_05_6580></Comp_05_6580>';
<Comp_05_6581></Comp_05_6581>';
<Comp_05_6582></Comp_05_6582>';
<Comp_05_6583></Comp_05_6583>';
<Comp_05_6584></Comp_05_6584>';
        </div>
      </div>;
};

export default Comp_04_1316;
