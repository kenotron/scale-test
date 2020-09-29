// Comp_04_0937
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4685 from './Comp_05_4685';
import Comp_05_4686 from './Comp_05_4686';
import Comp_05_4687 from './Comp_05_4687';
import Comp_05_4688 from './Comp_05_4688';
import Comp_05_4689 from './Comp_05_4689';

const Comp_04_0937: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0937
      <div>
      <Comp_05_4685></Comp_05_4685>';
<Comp_05_4686></Comp_05_4686>';
<Comp_05_4687></Comp_05_4687>';
<Comp_05_4688></Comp_05_4688>';
<Comp_05_4689></Comp_05_4689>';
        </div>
      </div>;
};

export default Comp_04_0937;
