// Comp_04_1137
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5685 from './Comp_05_5685';
import Comp_05_5686 from './Comp_05_5686';
import Comp_05_5687 from './Comp_05_5687';
import Comp_05_5688 from './Comp_05_5688';
import Comp_05_5689 from './Comp_05_5689';

const Comp_04_1137: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1137
      <div>
      <Comp_05_5685></Comp_05_5685>';
<Comp_05_5686></Comp_05_5686>';
<Comp_05_5687></Comp_05_5687>';
<Comp_05_5688></Comp_05_5688>';
<Comp_05_5689></Comp_05_5689>';
        </div>
      </div>;
};

export default Comp_04_1137;
