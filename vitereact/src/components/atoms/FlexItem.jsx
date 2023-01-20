import FlexBox from './molecula/FlexBox';
import FlexItem from '../../assets/style/FlexItem.css'
function FlexItem({itemId}) {
    return (  
        <div className="flex-container_child">
            {itemId}
        </div>
    );
}

export default FlexItem;