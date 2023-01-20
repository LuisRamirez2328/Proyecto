import FlexItem from "../FlexItem";
import Flexbox from '../../../assets/style/FlexBox.css'
function FlexBox() {
    const FlexItem =[1,2,3,4,5];
    return ( 
    
          <div className="flex-container">
                {flexItem.map((item)=>(
                <FlexItem key={item} itemId={item}/>
                ))  }
    </div>
      
     );
}

export default FlexBox;