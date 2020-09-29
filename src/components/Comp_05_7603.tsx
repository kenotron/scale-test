// Comp_05_7603
import React from 'react';
import { incModCount } from '../modCount';


const Comp_05_7603: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_05_7603
      <div>
      
        </div>
      </div>;
};

export default Comp_05_7603;
