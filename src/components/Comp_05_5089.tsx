// Comp_05_5089
import React from 'react';
import { incModCount } from '../modCount';


const Comp_05_5089: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_05_5089
      <div>
      
        </div>
      </div>;
};

export default Comp_05_5089;
