import React from 'react';
import Story from '../../components/story/Story';
import withItemListData from '../../hoc/withItemListData';

const StoryList = ({data}) => 
    <>
        {
            data.map( (entry, index) => 
                <Story 
                    key = {index} 
                    {...entry}
                />
            )
        }
    </>

export default withItemListData(StoryList);